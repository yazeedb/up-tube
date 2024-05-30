import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  createFake() {
    return this.appService.createFake();
  }

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
