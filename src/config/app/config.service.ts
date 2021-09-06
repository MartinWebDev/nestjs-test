import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
/**
 * Service dealing with app config based operations.
 *
 * @class
 */
@Injectable()
export class AppConfigService {
  constructor(private configService: ConfigService) {}
  get dbName(): string {
    return this.configService.get<string>('app.dbName');
  }

  get dbConnectionString(): string {
    return this.configService.get<string>('app.dbConnectionString');
  }
}
