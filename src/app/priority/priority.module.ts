import { Module } from "@nestjs/common";
import { PriorityController } from "./priority.controller";
import { PriorityService } from "./priority.service";
import { UtilsService } from "../utils/utils.service";
import { PrismaService } from "../prisma/prisma.service";
import { PriorityRepository } from "./repository/priority.repository";

@Module({
  controllers: [PriorityController],
  providers: [PriorityService, UtilsService, PrismaService, PriorityRepository],
})
export class PriorityModule {}
