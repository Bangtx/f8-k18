import {IsArray, IsDate, IsDateString, IsNumber, ValidateNested} from "class-validator";
import {Type} from "class-transformer";


export class OrderDetailCreateDto {
  @IsNumber()
  productId: number

  @IsNumber()
  quantity: number
}

export class OrderCreateDto {
  @IsDateString()
  date: Date

  @IsNumber()
  customerId: number

  @IsArray()
  @ValidateNested({each: true})
  @Type(() => OrderDetailCreateDto)
  details: OrderDetailCreateDto[]
}

export class OrderUpdateDto extends OrderCreateDto {}