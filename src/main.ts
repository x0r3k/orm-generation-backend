import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');
  const configService = app.get(ConfigService);

  await app.listen(configService.get<number>('port'));
  logger.log(`Listening on ${await app.getUrl()}`);
}

bootstrap();
