import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { configurations } from './config';
import { validationSchema } from './validation';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [...configurations],
      isGlobal: true,
      validationSchema,
    }),
  ],
})
export class ConfigModule {}
