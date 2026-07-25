import {IsNumber, IsString, ValidateIf} from "class-validator";


class ProductBaseDto {
  @IsString()
  name: string

  @IsNumber()
  price: number

  @IsString()
  @ValidateIf((object, value) => value !== null)
  description: string
}


export class ProductCreateDto extends ProductBaseDto {}

export class ProductUpdateDto extends ProductBaseDto {}