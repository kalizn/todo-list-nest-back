import { Module } from "@nestjs/common";
import { UtilsService } from "../utils/utils.service";
import { PrismaService } from "../prisma/prisma.service";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepository } from "./repository/user.repository";

@Module({
  controllers: [UserController],
  providers: [UserService, UtilsService, PrismaService, UserRepository],
})
export class UserModule {}
