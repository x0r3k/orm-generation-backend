import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { CONFIG_KEY } from './config/constants';
import { IAppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const logger = new Logger('bootstrap');
  const configService = app.get(ConfigService);
  const appConfig = configService.get<IAppConfig>(CONFIG_KEY.app);

  await app.listen(appConfig.port);
  logger.log(`Listening on ${await app.getUrl()}`);
  logger.log(`> NODE_ENV is ${appConfig.env}`);
}

bootstrap();
