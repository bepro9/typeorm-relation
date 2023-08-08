import { Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/seed')
  async seed() {
    await this.appService.seed();
    return 'seed complete';
  }

  @Post('/deseed')
  async deseed(@Param('id', ParseUUIDPipe) id: string) {
    await this.appService.deseed(id);
    return 'D seed complete';
  }
}
