import {
    Controller,
    Get,
    Post,
    Body,
    Res,
    Put,
    HttpStatus,
  } from "@nestjs/common";
  import { Response } from "express";
  import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { PriorityService } from "./priority.service";
import { CreatePriorityDto } from "./dto/create-priority.dto";
import { UpdatePriorityDto } from "./dto/update-priority.dto";
  
  @Controller("priority")
  @ApiTags("Priority")
  export class PriorityController {
    constructor(private readonly priorityService: PriorityService) {}
  
    @ApiOperation({
      summary: "Para criar uma nova prioridade!",
    })
    @ApiResponse({
      status: 201,
      description: "Criado com sucesso!",
      // type: UserResponse,
    })
    @ApiResponse({
      status: 203,
      description: "Prioridade já cadastrada!",
    })
    @ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: "Erro interno!",
    })
    @Post()
    async create(@Res() res: Response, @Body() createPriorityDto: CreatePriorityDto) {
      const returned = await this.priorityService.create(createPriorityDto);
      if (returned === null) {
        return res.status(500).json({ message: "Erro interno!" });
      }
  
      if (returned === false) {
        return res
          .status(203)
          .json({ message: "Já existe uma prioridade com este nome!" });
      }
  
      return res.status(201).json(returned);
    }
  
    @ApiOperation({
      summary: "Para pegar todas os Prioridades",
    })
    @ApiResponse({
      status: 200,
      description: "Todas as Prioridades!",
    })
    @ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: "Erro interno!",
    })
    @Get()
    async getAll(@Res() res: Response) {
      const returned = await this.priorityService.getAll();
      if (returned === null) {
        return res.status(500).json({ message: "Erro interno!" });
      }
      return res.status(200).json(returned);
    }
  
    @ApiOperation({
      summary: "Para atualizar a prioridade!",
    })
    @ApiResponse({
      status: 200,
      description: "Atualizada com sucesso!",
    })
    @ApiResponse({
      status: 203,
      description: "Prioridade não encontrada em nossa base de dados!",
    })
    @ApiResponse({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      description: "Erro interno!",
    })
    @Put()
    async update(@Res() res: Response, @Body() updatePriorityDto: UpdatePriorityDto) {
      const returned = await this.priorityService.update(updatePriorityDto);
      if (returned === null) {
        return res.status(500).json({ message: "Erro interno!" });
      }
  
      if (returned === false) {
        return res.status(203).json({ message: "Prioridade não encontrada!" });
      }
  
      return res.status(200).json(returned);
    }
  }
  