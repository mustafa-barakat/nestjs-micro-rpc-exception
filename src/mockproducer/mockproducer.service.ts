import { Injectable, HttpException, Inject, Module } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { Cron } from '@nestjs/schedule';
import { lastValueFrom } from 'rxjs';
@Injectable()
export class MockproducerService {
  constructor(@Inject('IPR_SERVICE') private client: ClientKafka) {}
  onModuleInit() {
    this.client.subscribeToResponseOf('addOrUpdateIPP');
  }
  @Cron('41 * * * * *')
  async first() {
    this.addOrUpdateIPP();
  }
  // @Cron('41 * * * * *')
  // async second() {
  //   this.addOrUpdateIPP();
  // }
  // @Cron('42 * * * * *')
  // async third() {
  //   this.addOrUpdateIPP();
  // }
  async addOrUpdateIPP() {
    console.log('Sending kafka msg');
    try {
      const pattern = 'addOrUpdateIPP';
      const payload = 'data';
      console.log('emitting');
      const response = await lastValueFrom(
        this.client.send(pattern, payload), //.pipe(timeout(5000)),
      );
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
    }
  }
}
