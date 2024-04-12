import {
    Controller,
    Get,
    Post,
    Body,
    Res,
    Put,
    HttpStatus,
    Param,
    Delete,
    Patch,
} from "@nestjs/common";
import { Response } from "express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { ToDoService } from "./todo.service";
import { CreateToDoDto } from "./dto/create-todo.dto";
import { UpdateToDoDto } from "./dto/update-todo.dto";

@Controller("todo")
@ApiTags("ToDo")
export class ToDoController {
    constructor(private readonly toDoService: ToDoService) { }

    @ApiOperation({
        summary: "Para criar uma nova tarefa",
    })
    @ApiResponse({
        status: 201,
        description: "Criado com sucesso!",
        // type: UserResponse,
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Post()
    async create(@Res() res: Response, @Body() createToDoDto: CreateToDoDto) {
        const returned = await this.toDoService.create(createToDoDto);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }

        return res.status(201).json(returned);
    }

    @ApiOperation({
        summary: "Para pegar todas as tarefas",
    })
    @ApiResponse({
        status: 200,
        description: "Todas as Tarefas do usuário!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Get(":user")
    async getAll(@Res() res: Response, @Param("user") id: string) {
        const returned = await this.toDoService.getAll(id);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }
        return res.status(200).json(returned);
    }

    @ApiOperation({
        summary: "Para atualizar a tarefa!",
    })
    @ApiResponse({
        status: 200,
        description: "Atualizada com sucesso!",
    })
    @ApiResponse({
        status: 203,
        description: "Tarefa não encontrada em nossa base de dados!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Put()
    async update(@Res() res: Response, @Body() updateToDoDto: UpdateToDoDto) {
        const returned = await this.toDoService.update(updateToDoDto);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }

        if (returned === false) {
            return res.status(203).json({ message: "Tarefa não encontrada!" });
        }

        return res.status(200).json(returned);
    }

    @ApiOperation({
        summary: "Para atualizar a tarefa!",
    })
    @ApiResponse({
        status: 200,
        description: "Atualizada com sucesso!",
    })
    @ApiResponse({
        status: 203,
        description: "Tarefa não encontrada em nossa base de dados!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Patch(":id/:user")
    async updateDate(@Res() res: Response, @Param("id") id: string, @Param("user") idUser: string) {
        const returned = await this.toDoService.updateDate(id, idUser);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }

        if (returned === false) {
            return res.status(203).json({ message: "Tarefa não encontrada!" });
        }

        return res.status(200).json(returned);
    }

    @ApiOperation({
        summary: "Para deletar uma tarefa",
    })
    @ApiResponse({
        status: 200,
        description: "Deletada com sucesso!",
    })
    @ApiResponse({
        status: 203,
        description: "Tarefa não encontrada em nossa base de dados!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Delete(":id/:user")
    async delete(@Res() res: Response, @Param("id") id: string, @Param("user") idUser: string) {
        const returned = await this.toDoService.delete(id, idUser);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno! " });
        }

        if (returned === false) {
            return res.status(203).json({ message: "Tarefa não encontrada!" });
        }

        return res.status(200).json(returned);
    }
}
