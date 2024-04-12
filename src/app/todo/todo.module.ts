import { Module } from "@nestjs/common";
import { UtilsService } from "../utils/utils.service";
import { PrismaService } from "../prisma/prisma.service";
import { ToDoController } from "./todo.controller";
import { ToDoService } from "./todo.service";
import { ToDoRepository } from "./repository/todo.repository";

@Module({
  controllers: [ToDoController],
  providers: [ToDoService, UtilsService, PrismaService, ToDoRepository],
})
export class ToDoModule {}
