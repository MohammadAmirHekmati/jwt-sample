import { RoleEnum } from "../enum/role.enum";
import { SetMetadata } from "@nestjs/common";

export const ROLES='roles'
export const RolesGuardCust=(...roles:RoleEnum[])=>SetMetadata(ROLES,roles)