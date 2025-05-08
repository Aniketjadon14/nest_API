// import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
// import { TasksService } from './tasks.service';
// import { Task, TaskStatus } from './task.module'; 
// @Controller('tasks')
// export class TasksController {
//   constructor(private readonly tasksService: TasksService) {}

//   @Get()
//   getAllTasks(): Task[] {
//     return this.tasksService.getAllTask(); 
//   }

//   @Get('/:id')
//   getTaskById(@Param('id') id:string):Task{
//    return this.tasksService.getTaskById(id);
//   }


//   @Post()
//   createTask(
//     @Body('title') title: string,
//     @Body('description') description: string,
//     @Body('Company') Company: string,
//     @Body('age') age: string
//   ): Task {
//     return this.tasksService.createTask(title, description,Company, age);
//   }

// @Delete('/:id')
// deleteTask(@Param('id')id:string){
//   this.tasksService.deleteTask(id);
//   return `Task ${id} deleted`;
// }

// @Patch('/:id')
// updateTask(
//   @Param('id') id: string,
//   @Body() updateData: { title?: string; description?: string; Company?: string; age?: string; status?: TaskStatus }
// ) {
//   return this.tasksService.updateTask(id, updateData);
// }

// }


import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { gender, Task, TaskStatus, } from './task.schema';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async getAllTasks(): Promise<Task[]> {
    return this.tasksService.getAllTask();
  }

  @Get('/:id')
  async getTaskById(@Param('id') id: string): Promise<Task> {
    return this.tasksService.getTaskById(id);
  }

  @Post()
  async createTask(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('Company') Company: string,
    @Body('age') age: string,
    @Body('gender') gender: string,
    @Body('status') status: string,
  ): Promise<Task> {
    return this.tasksService.createTask(title, description, Company, age, gender,status);
  }

  @Delete('/:id')
  async deleteTask(@Param('id') id: string): Promise<string> {
    await this.tasksService.deleteTask(id);
    return `Task ${id} deleted`;
  }

  @Patch('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateData: { title?: string; description?: string; Company?: string; age?: string;  gender?: gender;  status?:string }
  ): Promise<Task> {
    return this.tasksService.updateTask(id, updateData);
    
  }
}
