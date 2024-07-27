import * as Joi from 'joi';
import { ENVIRONMENT } from './constants';

export const validationSchema = Joi.object({
  /* APP CONFIG */
  NODE_ENV: Joi.string()
    .valid(...Object.values(ENVIRONMENT))
    .required(),
  PORT: Joi.number().integer().required(),
  SKIP_SSL_CERT: Joi.boolean().default(false).required(),
  /* DATA CONFIG */
  DATABASE_POSTGRESQL_HOST: Joi.string().required(),
  DATABASE_POSTGRESQL_PORT: Joi.number().integer().required(),
  DATABASE_POSTGRESQL_DATABASE: Joi.string().required(),
  DATABASE_POSTGRESQL_USER: Joi.string().required(),
  DATABASE_POSTGRESQL_PASSWORD: Joi.string().required(),
});
