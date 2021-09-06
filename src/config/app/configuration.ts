import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  dbName: process.env.DB_NAME,
  dbConnectionString: process.env.DB_CONNECTION_STRING,
}));
