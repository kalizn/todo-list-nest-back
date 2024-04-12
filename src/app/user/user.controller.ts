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
} from "@nestjs/common";
import { Response } from "express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller("user")
@ApiTags("User")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @ApiOperation({
        summary: "Para criar uma novo usuário",
    })
    @ApiResponse({
        status: 201,
        description: "Criado com sucesso!",
        // type: UserResponse,
    })
    @ApiResponse({
        status: 203,
        description: "Usuário já cadastrado!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Post()
    async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
        const returned = await this.userService.create(createUserDto);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }

        if (returned === false) {
            return res.status(203).json({ message: "Usuário já cadastrado!" });
        }

        return res.status(201).json(returned);
    }

    @ApiOperation({
        summary: "Para atualizar o usuário!",
    })
    @ApiResponse({
        status: 200,
        description: "Atualizado com sucesso!",
    })
    @ApiResponse({
        status: 203,
        description: "Usuário não encontrado em nossa base de dados!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Put()
    async update(@Res() res: Response, @Body() updateUserDto: UpdateUserDto) {
        const returned = await this.userService.update(updateUserDto);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }

        if (returned === false) {
            return res.status(203).json({ message: "Usuário não encontrado!" });
        }

        return res.status(200).json(returned);
    }

    @ApiOperation({
        summary: "Para verificar o usuário!",
    })
    @ApiResponse({
        status: 200,
        description: "Usuário existe!",
    })
    @ApiResponse({
        status: 203,
        description: "Usuário não encontrado em nossa base de dados!",
    })
    @ApiResponse({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        description: "Erro interno!",
    })
    @Get(":id")
    async getById(@Res() res: Response, @Param("id") id: string) {
        const returned = await this.userService.getById(id);
        if (returned === null) {
            return res.status(500).json({ message: "Erro interno!" });
        }

        if (returned === false) {
            return res.status(203).json({ message: "Usuário não encontrado." });
        }
        
        return res.status(200).json(returned);
    }
}
