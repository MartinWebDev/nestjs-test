import { Module } from '@nestjs/common';

import { AppConfigModule } from 'src/config/app/config.module';
import { DatabaseModule } from 'src/modules/database.module';
import { UserRepository } from 'src/repositories/user.repository';
import { UserService } from 'src/services/user.service';
import { userProviders } from 'src/database/user.providers';

import { UserController } from './user.controller';

@Module({
  imports: [DatabaseModule, AppConfigModule],
  controllers: [UserController],
  providers: [UserService, UserRepository, ...userProviders],
})
export class UserModule {}
