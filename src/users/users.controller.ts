/* eslint-disable prettier/prettier */
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  //   get all users
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findall();
  }

  //  get one user
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    } else {
      return user;
    }
  }
  //    create user
  @Post()
  async create(@Body() user: User): Promise<User> {
    return await this.userService.create(user);
  }

  // update user
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  // delete user
  @Delete(':id')
  async delete(@Param(':id') id: number): Promise<void> {
    //handle the error if user not found
    const user = await this.userService.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }
    return this.userService.delete(id);
  }
}
