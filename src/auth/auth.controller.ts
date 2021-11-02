import { Body, Controller, Post } from "@nestjs/common";
import { UserLoginDto } from "./dto/user-login.dto";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
@ApiTags('Authorization endpoint')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService:AuthService
  ) {
  }
  @Post('login')
  async login(@Body() userLoginDto:UserLoginDto):Promise<string>{
    return this.authService.login(userLoginDto)
  }
}
