import { PartialType } from "@nestjs/mapped-types";
import { CreateCoffeeDto } from "./create-coffee.dto";

export class UpdateCoffeeDto extends PartialType(CreateCoffeeDto) {
}


// npm i @nestjs/mapped-types doing this will help not to repeat code in create u just pass it in here