import { Controller, Get } from '@nestjs/common';
import { SandboxService } from './sandbox.service';

@Controller('test') // "string" param in Controller decorator defines prefix to all methods defined in controller
export class SandboxController {
  constructor(private readonly testService: SandboxService) {}

  @Get() // "string" param in Method decorator defines route path
  getDatabase(): string {
    return this.testService.database();
  }

  @Get('query') // "string" param in Method decorator defines route path
  async getDatabaseQuery(): Promise<string> {
    return await this.testService.databaseQuery();
  }
}
