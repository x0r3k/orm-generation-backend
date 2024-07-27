import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from './config/config.module';
import { SandboxModule } from './modules/sandbox/sandbox.module';

@Module({
  imports: [ConfigModule, SandboxModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
