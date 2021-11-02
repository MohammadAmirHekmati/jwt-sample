import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Reflector } from "@nestjs/core";
import { ROLES } from "../decorator/role-guard.decorator";
import { UserEntity } from "../models/user.entity";

@Injectable()
export class RoleGuard implements CanActivate{
  constructor(
    private readonly reflector:Reflector,
  ) {
  }
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const roles=this.reflector.getAllAndOverride<string[]>(ROLES,[
      context.getClass(),
      context.getHandler()
    ])

    if(!roles)
      return true
    const {user}:{user:UserEntity}=context.switchToHttp().getRequest()
    for(let role of roles){
      for(let userRole of user.roles){
        if(role===userRole){
          return true
        }
      }
    }

    return false;
  }
  
}