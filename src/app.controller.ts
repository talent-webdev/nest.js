import { Controller, Get, Query, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';

import { AppService } from './app.service';
import { Request } from 'express';

@Controller('test')
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} cats`;
  }

  @Get('/jong/:ids')
  findAll(@Req()request: Request, @Param('ids') id: string): string {
    return 'This action returns all cats' + id;
  }
}
