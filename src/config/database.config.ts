import { registerAs } from '@nestjs/config';
import type { ConfigType } from '@nestjs/config';
import { getEnv, getEnvNumber } from './utils';
import { CONFIG_KEY } from './constants';

export const DatabaseConfig = registerAs(CONFIG_KEY.db, () => ({
  host: getEnv('DATABASE_POSTGRESQL_HOST'),
  port: getEnvNumber('DATABASE_POSTGRESQL_PORT'),
  user: getEnv('DATABASE_POSTGRESQL_USER'),
  password: getEnv('DATABASE_POSTGRESQL_PASSWORD'),
  database: getEnv('DATABASE_POSTGRESQL_DATABASE'),
}));

export type IDatabaseConfig = ConfigType<typeof DatabaseConfig>;
