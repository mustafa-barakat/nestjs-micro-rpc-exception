import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggingInterceptor } from './logging.interceptor';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['host.docker.internal:29092'],
        },
        consumer: {
          groupId: 'test-group',
        },
      },
    },
  );
  // app.useGlobalInterceptors(new LoggingInterceptor());
  await app.listen();
}
bootstrap();
