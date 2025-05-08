// import { Injectable, Patch } from '@nestjs/common';
// import { Task, TaskStatus } from './task.module';
// import { console } from 'inspector';

// @Injectable()
// export class TasksService {
//   private tasks: Task[] = [];

//   getAllTask(): Task[] {
//     return this.tasks;
//   }

//   getTaskById(id:string):Task{
//     return this.tasks.find(task => task.id === id);
//   }

//   createTask(title: string, description: string ,Company:string, age:string): 
  
//   Task {
    
//     const id = new Date().toString();
//     const task: Task = {
//       id: Date.now().toString(),
//       title,
//       description,
//       Company,
//       age,
//       status: TaskStatus.OPEN,
//     };
//     this.tasks.push(task);
//     return task;
//   }

//   deleteTask(id:string){
//     this.tasks = this.tasks.filter(task => task.id !== id);
//   }

  
//   updateTask(id: string, updateData: { title?: string; description?: string; Company?: string; age?: string; status?: TaskStatus }): Task {
    
//     const task = this.getTaskById(id);
  
    
//     if (updateData.title !== undefined) task.title = updateData.title;
//     if (updateData.description !== undefined) task.description = updateData.description;
//     if (updateData.Company !== undefined) task.Company = updateData.Company;
//     if (updateData.age !== undefined) task.age = updateData.age;
//     if (updateData.status !== undefined) task.status = updateData.status;
  
  
//     return task;
//   }


// }
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Task } from './task.schema';

@Injectable()
export class TasksService {
  constructor(@InjectModel('Task') private readonly taskModel: Model<Task>) {}

  async getAllTask(): Promise<Task[]> {
    return this.taskModel.find().exec();
  }

  async getTaskById(id: string): Promise<Task> {
    return this.taskModel.findById(id).exec();
  }

  async createTask(title: string, description: string, Company: string, age: string, gender: string, status: string): Promise<Task> {
    const newTask = new this.taskModel({ title, description, Company, age , gender, status });
    return newTask.save();
  }

  async deleteTask(id: string): Promise<void> {
    await this.taskModel.findByIdAndDelete(id).exec();
  }

  async updateTask(id: string, updateData: Partial<Task>): Promise<Task> {
    return this.taskModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
  }
}
