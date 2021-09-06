import { Injectable } from '@nestjs/common';
import { ObjectId } from 'mongodb';

import { AppConfigService } from 'src/config/app/config.service';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _appConfigService: AppConfigService,
  ) {}

  async getAllUsers() {
    return await this._userRepository.find();
  }

  async getUserById(id: string) {
    return await this._userRepository.findById(new ObjectId(id));
  }

  async getUserByUserId(userId: string) {
    return await this._userRepository.findUser(userId);
  }
}
