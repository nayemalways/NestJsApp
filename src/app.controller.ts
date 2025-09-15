import { Controller, Get, Post, Body, HttpCode } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/') // All routes under /users
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAllUsers() {
    return "Welcome to the show";
  }

  @Post()
  @HttpCode(201)
  createUser(@Body() body: { name: string; email: string }) {
    return this.appService.createUser(body);
  }
}
