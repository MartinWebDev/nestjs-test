import { Document, ObjectId } from 'mongodb';

export interface IUser extends Document {
  readonly _id: ObjectId;
  readonly userId: string;
  readonly name: string;
  readonly dob: Date;
}
