// // src/user/user.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { UserSchema } from '../schemase/user.schema'; // User schema import karein
// import { TasksService } from '../tasks/tasks.service';      // User service import karein
// import { TasksController } from '../tasks/tasks.controller'; // User controller import karein

// @Module({
//   imports: [
//     MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),  // User schema ko import karein
//   ],
//   providers: [TasksService],  // Service ko provide karein
//   controllers: [TasksController], // Controller ko provide karein
// })
// export class UserModule {}
