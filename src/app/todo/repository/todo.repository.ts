import { PrismaService } from "src/app/prisma/prisma.service";
import { UtilsService } from "src/app/utils/utils.service";
import { Injectable } from "@nestjs/common";
import { CreateToDoDto } from "../dto/create-todo.dto";
import { UpdateToDoDto } from "../dto/update-todo.dto";

@Injectable()
export class ToDoRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly utilsService: UtilsService
    ) {}

    async create(createToDoDto: CreateToDoDto) {
        try{
            
            const todo = await this.prisma.tb_todo.create({
                data: {
                    title: createToDoDto.title,
                    idUser: createToDoDto.idUser,
                    description: createToDoDto.description,
                    priorityId: createToDoDto.priorityId,
                    finalDate: createToDoDto.finalDate
                }
            })

            return await this.utilsService.helperIdToString(todo);
        } catch (error) {
            console.log("Create - ToDo");
            console.log(error);
            return null;
        }
    } 

    async update(updateToDoDto: UpdateToDoDto) {
        try{
            const exists = await this.prisma.tb_todo.findFirst({
                where: { id:updateToDoDto.id, idUser: updateToDoDto.idUser}
            })

            if (exists === null) {
                return false;
            }

            const todo = await this.prisma.tb_todo.update({
                where: { id: updateToDoDto.id, idUser: updateToDoDto.idUser },
                data: {
                    idUser: updateToDoDto.idUser,
                    title: updateToDoDto.title,
                    description: updateToDoDto.description,
                    priorityId: updateToDoDto.priorityId,
                    finalDate: updateToDoDto.finalDate
                }
            })

            return await this.utilsService.helperIdToString(todo)
        } catch (error){
            console.log('Update - ToDo');
            console.log(error);
            return null;
        }
    }

    async getAllById(id: string) {
        try {
          const todo = await this.prisma.tb_todo.findMany({
            where: { idUser: parseInt(id) },
            orderBy: {
              created_at: 'asc',
            },
            include: {
              priority: {
                select: {
                  name: true,
                },
              },
            },
          });
      
          const newTodo = [];
      
          for (const el of todo) {
            newTodo.push(await this.utilsService.helperIdToString(el));
          }
      
          return newTodo;
        } catch (error) {
          console.log("Get All By Id - ToDo");
          console.log(error);
          return null;
        }
      }
      

    async delete(id: string, idUser: string) {
        try {
            const exists = await this.prisma.tb_todo.findFirst({
                where: { id: parseInt(id), idUser: parseInt(idUser)}
            })

            if (exists === null) {
                return false;
            }

            const todo = await this.prisma.tb_todo.delete({
                where: { id: parseInt(id), idUser: parseInt(idUser)}
            })

            return await this.utilsService.helperIdToString(todo);
            
        } catch (error) {
            console.log('Delete - ToDo')
            console.log(error)
            return null;
        }
    }

    async updateDate(id:string, idUser: string) {
        try {
            const exists = await this.prisma.tb_todo.findFirst({
                where: { id: parseInt(id), idUser: parseInt(idUser)}
            })

            if (exists === null) {
                return false;
            }

            await this.prisma.tb_todo.update({
                where: { id: parseInt(id) },
                data: {
                    finally_at: new Date().toString()
                }
            });

            return true;
            
        } catch (error) {
            console.log('Update Date Status - ToDo');
            console.log(error);
            return null;
        }
    }
}