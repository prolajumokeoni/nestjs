import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Patch,
  Delete,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

//PUT REPLACES THE ENTIRE RESOURCE, YOU NEED TO HAVE THE OBJECT WITHIN THE REQUEST IN THE PAYLOAD, PATCH MODIFY A RESOURCE PARTIALLY

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeeService: CoffeesService) {}

  @Get()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  findAll(@Query() paginationQuery) {
    // const { limit, offset } = paginationQuery;
    // return `This should return all coffees. Limit: ${limit}, offset: ${offset}`;
    return this.coffeeService.findAll();
  }

  @Get(':id')
  findOneBy(@Param('id') id: string) {
    return this.coffeeService.findOneBy({ id: id });
  }

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    console.log(createCoffeeDto instanceof CreateCoffeeDto);
    return this.coffeeService.create(createCoffeeDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
    return this.coffeeService.update(id, updateCoffeeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.coffeeService.remove(id);
  }
}
