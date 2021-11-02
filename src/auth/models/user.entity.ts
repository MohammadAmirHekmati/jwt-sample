import { RoleEnum } from "../enum/role.enum";

export class UserEntity {
  username:string
  password:string
  roles:RoleEnum[]
}