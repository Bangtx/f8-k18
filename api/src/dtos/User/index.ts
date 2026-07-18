import {IsNumber, IsString} from "class-validator";

export class UserCreateDto {
  @IsString()
  name: string

  @IsNumber()
  age: number
}
