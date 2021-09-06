import { Injectable } from '@nestjs/common';
import { Filter } from 'mongodb';

import { BaseRepository } from './base.repository';

@Injectable()
export class UserRepository extends BaseRepository {
  constructor() {
    super('users');
  }

  async findUser(userId: string): Promise<any[]> {
    return await this.getDb()
      .find(this.collectionUserIdFilter(userId))
      .toArray();
  }

  protected collectionUserIdFilter(userId: string): Filter<any> {
    return {
      userId: userId,
    };
  }
}
