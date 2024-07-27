import postgres from 'postgres';
import { Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CONFIG_KEY } from '../config/constants';
import { IDatabaseConfig } from '../config/database.config';

export const DB_PROVIDER_SYMBOL = Symbol('POSTGRES'); // FIXME: move somewhere to constants

export const InjectDbProvider = () => Inject(DB_PROVIDER_SYMBOL);

export const databaseProvider = {
  provide: DB_PROVIDER_SYMBOL,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    const databaseConfig = configService.get<IDatabaseConfig>(CONFIG_KEY.db);

    const sql = postgres('', {
      host: databaseConfig.host,
      port: databaseConfig.port,
      database: databaseConfig.database,
      user: databaseConfig.user,
      password: databaseConfig.password,
    });

    return sql;
  },
};
