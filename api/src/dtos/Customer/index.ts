import {IsNumber, IsString} from "class-validator";

export class CustomerCreateDto {
  @IsString()
  name: string
}


export class CustomerUpdateDto extends CustomerCreateDto {}