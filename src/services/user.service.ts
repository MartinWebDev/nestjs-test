import { Injectable } from '@nestjs/common';
import { Types } from 'mongoose';
import { CreateUserDto } from 'src/api/create-user.dto';

import { AppConfigService } from 'src/config/app/config.service';
import { UserRepository } from 'src/repositories/user.repository';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _appConfigService: AppConfigService,
  ) {}

  async getAllUsers() {
    return await this._userRepository.findAll();
  }

  async getUserById(id: string) {
    const idObj = new Types.ObjectId(id);
    return await this._userRepository.findById(idObj);
  }

  async getUserByUserId(userId: string) {
    return await this._userRepository.findUser(userId);
  }

  async createUser(createUserDto: CreateUserDto) {
    return await this._userRepository.create(createUserDto);
  }
}
