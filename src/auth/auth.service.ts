import { Injectable, NotFoundException } from "@nestjs/common";
import { UserEntity } from "./models/user.entity";
import { RoleEnum } from "./enum/role.enum";
import { UserLoginDto } from "./dto/user-login.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService:JwtService
  ) {
  }
  sampleUser:UserEntity={
    username:'test',
    password:'test',
    roles:[RoleEnum.USER,RoleEnum.SUPERADMIN]
  }

  async login(userLoginDto:UserLoginDto):Promise<string>{
    const {username,password}=userLoginDto
    if(this.sampleUser.username!==username || this.sampleUser.password !==password)
      throw new NotFoundException()
    const payload={username,roles:this.sampleUser.roles}
    const token=this.jwtService.sign(payload)
    return token
  }
}
