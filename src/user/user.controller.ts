import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { CreateUserDto } from 'src/api/create-user.dto';

import { UserService } from 'src/services/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly _userService: UserService) {}

  @Get('userId/:userId')
  async getUserFromId(@Param('userId') userId: string) {
    return await this._userService.getUserByUserId(userId);
  }

  @Get('error')
  getError() {
    throw new HttpException(`I don't exist yet!`, HttpStatus.NOT_IMPLEMENTED);
  }

  @Get('createRandom')
  async createRandom() {
    const createUserDto: CreateUserDto = {
      userId: '987654',
      name: 'Alan',
      dob: new Date('1980-10-10'),
    };
    return await this._userService.createUser(createUserDto);
  }

  @Get(':id')
  async getUser(@Param('id') id: string) {
    return await this._userService.getUserById(id);
  }

  @Get('')
  async getUsers() {
    return await this._userService.getAllUsers();
  }
}
