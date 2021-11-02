import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtModule } from "@nestjs/jwt";
import { JwtStrategy } from "./strategy/jwt.strategy";
import { RoleGuard } from "./guard/role.guard";

@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtModule,JwtStrategy,RoleGuard],
  imports:[
    JwtModule.register({
      secret:'123456',
      signOptions:{
        expiresIn: '10h'
      }
    })
  ],

})
export class AuthModule {}
