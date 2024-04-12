import { Injectable } from "@nestjs/common";
import { ToDoRepository } from "./repository/todo.repository";
import { CreateToDoDto } from "./dto/create-todo.dto";
import { UpdateToDoDto } from "./dto/update-todo.dto";

@Injectable()
export class ToDoService {
  constructor(private readonly toDoRepository: ToDoRepository) {}

  async create(createTodoDto: CreateToDoDto) {
    return await this.toDoRepository.create(createTodoDto);
  }

  async update(updateToDoDto: UpdateToDoDto) {
    return await this.toDoRepository.update(updateToDoDto);
  }

  async getAll(id: string) {
    return await this.toDoRepository.getAllById(id);
  }

  async delete(id: string, idUser: string) {
    return await this.toDoRepository.delete(id, idUser);
  }

  async updateDate(id: string, idUser: string) {
    return await this.toDoRepository.updateDate(id, idUser);
  }
}
