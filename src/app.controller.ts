import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import {
  Ctx,
  MessagePattern,
  KafkaContext,
  Payload,
  RpcException,
  EventPattern,
} from '@nestjs/microservices';
import { LoggingInterceptor } from './logging.interceptor';
// @UseInterceptors(new LoggingInterceptor())
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  async wait(): Promise<any> {
    return new Promise((resolve) => setTimeout(resolve, 3000));
  }

  @MessagePattern('addOrUpdateIPP')
  async addUser(
    @Ctx() context: KafkaContext,
    @Payload() message,
  ): Promise<any> {
    throw new RpcException('Error');
    // const originalMessage = context.getMessage();

    console.log('>>>>>>');
    await this.wait();
    console.log('<<<<<<');

    return 'x';
    // console.log(x);
    // return x;
  }
}
