import { Injectable, Inject } from '@nestjs/common';
import { Model, FilterQuery, Types } from 'mongoose';
import { CreateUserDto } from 'src/api/create-user.dto';
import { User } from 'src/interfaces/user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @Inject('USER_MODEL')
    private _userModel: Model<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this._userModel.find().exec();
  }

  async findUser(userId: string): Promise<any[]> {
    return await this._userModel
      .find(this.collectionUserIdFilter(userId))
      .exec();
  }

  async findById(id: Types.ObjectId) {
    return await this._userModel.findById(id).exec();
  }

  protected collectionUserIdFilter(userId: string): FilterQuery<User> {
    return {
      userId: userId,
    };
  }

  async create(createUserDto: CreateUserDto) {
    return await this._userModel.create(createUserDto);
  }
}
