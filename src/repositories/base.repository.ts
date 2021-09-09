// import { Inject } from '@nestjs/common';
// import { Db, ObjectId } from 'mongodb';

// export class BaseRepository {
//   constructor(private tableName: string) {}

//   @Inject('DATABASE_CONNECTION')
//   protected db: Db;

//   protected getDb() {
//     return this.db.collection(this.tableName);
//   }

//   async insertOne(data: any) {
//     await this.getDb().insertOne(data);
//   }

//   async find(): Promise<any[]> {
//     return await this.getDb().find().toArray();
//   }

//   async findById(id: ObjectId) {
//     return await this.getDb().findOne({
//       _id: id,
//     });
//   }
// }
