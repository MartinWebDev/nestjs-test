import { Document } from 'mongoose';

export interface User extends Document {
  readonly userId: string;
  readonly name: string;
  readonly dob: Date;
}
