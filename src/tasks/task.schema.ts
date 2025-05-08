import { Schema, Document } from 'mongoose';

export const TaskSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  Company: { type: String, required: true },
  age: { type: String, required: true },
  gender : { type: String, enum: ['male','female','Transgender'] },
  status: { type: String, enum: ['DONE', 'IN_PROGRESS', 'OPEN', 'NOT_STARTED'] },
});

export interface Task extends Document {
  id: string;
  title: string;
  description: string;
  Company: string;
  age: string;
  status: string;
  gender :gender;
}


export enum TaskStatus {
    DONE = 'DONE',
    IN_PROGRESS = 'IN_PROGRESS',
    OPEN = 'OPEN',
    NOT_STARTED = 'NOT_STARTED',
  }

  export enum gender {
    male = 'male',
    female = 'female',
   Transgender = 'Transgender',
  }