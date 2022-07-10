import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';

//PUT REPLACES THE ENTIRE RESOURCE, YOU NEED TO HAVE THE OBJECT WITHIN THE REQUEST IN THE PAYLOAD, PATCH MODIFY A RESOURCE PARTIALLY


@Controller('coffees')
export class CoffeesController {
	@Get()
	findAll(){
		return 'This should return all coffees';
	}

	@Get(':id')
	findOne(@Param('id') id: string) {
		return `This action returns #${id} coffee`;
	}

	@Post()
	create(@Body() body) {
		return body;
	}

	@Patch(':id')
	update(@Param('id') id: string, @Body() body) {
		return  `This action updates #${id} coffee`
	}

	@Delete(':id')
	remove(@Param('id') id: string) {
		return `This action removes #${id} coffees`;
	}


}
