// src/user/user.controller.ts

import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userData: { name: string; email: string }): Promise<User> {
    return this.userService.createUser(userData.name, userData.email);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.getAllUsers();
  }
}
