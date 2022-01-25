import { Module } from '@nestjs/common';
import { MockproducerService } from './mockproducer.service';
import { MockproducerController } from './mockproducer.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ScheduleModule } from '@nestjs/schedule';
@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'IPR_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'hero',
            brokers: ['host.docker.internal:29092'],
          },
          consumer: {
            groupId: 'test-group',
          },
        },
      },
    ]),
    ScheduleModule.forRoot(),
  ],
  controllers: [MockproducerController],
  providers: [MockproducerService],
})
export class MockproducerModule {}
