import { Module } from '@nestjs/common';
import * as mongoose from 'mongoose';

import { AppConfigModule } from 'src/config/app/config.module';
import { AppConfigService } from 'src/config/app/config.service';

@Module({
  imports: [AppConfigModule],
  providers: [
    {
      provide: 'DATABASE_CONNECTION',
      inject: [AppConfigService],
      useFactory: (
        appConfigService: AppConfigService,
      ): Promise<typeof mongoose> =>
        mongoose.connect(appConfigService.dbConnectionString),
    },
  ],
  exports: ['DATABASE_CONNECTION'],
})
export class DatabaseModule {}

// import { MongoClient, Db } from 'mongodb';
// @Module({
//   imports: [AppConfigModule],
//   providers: [
//     {
//       provide: 'DATABASE_CONNECTION',
//       inject: [AppConfigService],
//       useFactory: async (appConfigService: AppConfigService): Promise<Db> => {
//         const client = await MongoClient.connect(
//           appConfigService.dbConnectionString,
//         );
//         return client.db(appConfigService.dbName);
//       },
//     },
//   ],
//   exports: ['DATABASE_CONNECTION'],
// })
// export class DatabaseModule {}
