import { Injectable } from '@nestjs/common';
import { InjectDbProvider } from '../../database/database.provider';

@Injectable()
export class SandboxService {
  constructor(@InjectDbProvider() private readonly sql) {}

  database(): string {
    return 'database';
    // return algorithm.execute(attendees, exhibitors);
  }

  async databaseQuery(): Promise<string> {
    const result = await this.sql`
      SELECT *
      FROM sandbox
      LIMIT 10;
    `;

    return result;
  }
}
