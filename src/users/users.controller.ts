import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersEntity } from './entities/user.entity';
@Controller('users') 
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() users:UsersEntity ) {
    return this.usersService.create(users);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id) {
    return await this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id, @Body() User: UsersEntity) {
    return this.usersService.update(id, User);

    
  }

  @Delete(':id')
  remove(@Param('id',ParseIntPipe)  id) {
    return this.usersService.remove(id);
  }
}

