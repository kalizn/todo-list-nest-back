import { Module } from '@nestjs/common';
import { PriorityModule } from './app/priority/priority.module';
import { PrismaService } from './app/prisma/prisma.service';
import { ToDoModule } from './app/todo/todo.module';
import { UserModule } from './app/user/user.module';

@Module({
  imports: [PriorityModule, ToDoModule, UserModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule { }
