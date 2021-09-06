import { Module } from '@nestjs/common';
import { MongoClient, Db } from 'mongodb';

import { AppConfigModule } from 'src/config/app/config.module';
import { AppConfigService } from 'src/config/app/config.service';

@Module({
  imports: [AppConfigModule],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      inject: [AppConfigService],
      useFactory: async (appConfigService: AppConfigService): Promise<Db> => {
        const client = await MongoClient.connect(
          appConfigService.dbConnectionString,
        );
        return client.db(appConfigService.dbName);
      },
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}
