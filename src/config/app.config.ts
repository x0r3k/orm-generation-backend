import { registerAs } from '@nestjs/config';
import type { ConfigType } from '@nestjs/config';
import { CONFIG_KEY, ENVIRONMENT } from './constants';
import { getEnv, getEnvBoolean, getEnvNumber } from './utils';

export const AppConfig = registerAs(CONFIG_KEY.app, () => ({
  env: getEnv('NODE_ENV', ENVIRONMENT.development),
  port: getEnvNumber('APP_PORT', 3000),
  skipSSLCert: getEnvBoolean('SKIP_SSL_CERT', true),
}));

export type IAppConfig = ConfigType<typeof AppConfig>;
