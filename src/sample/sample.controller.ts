import { Controller, Get, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { JwtGuard } from "../auth/guard/jwt.guard";
import { RoleEnum } from "../auth/enum/role.enum";
import { RolesGuardCust } from "../auth/decorator/role-guard.decorator";
import { RoleGuard } from "../auth/guard/role.guard";

@ApiTags('Sample endpoint')
@Controller('sample')
export class SampleController {


  @RolesGuardCust(RoleEnum.ADMIN,RoleEnum.USER)
  @UseGuards(JwtGuard,RoleGuard)
  @Get()
  sample(){
    return 'Hello World...'
  }
}
