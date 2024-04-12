import { PrismaService } from "src/app/prisma/prisma.service";
import { UtilsService } from "src/app/utils/utils.service";
import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { UpdateUserDto } from "../dto/update-user.dto";

@Injectable()
export class UserRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly utilsService: UtilsService
    ) {}

    async create(createUserDto: CreateUserDto) {
        try{
            const exists = await this.prisma.tb_users.findFirst({
                where: {idGoogle: createUserDto.idGoogle}
            })

            if (exists) {
                return false
            }
            
            const user = await this.prisma.tb_users.create({
                data: {
                    idGoogle: createUserDto.idGoogle,
                    name: createUserDto.name,
                }
            })

            return await this.utilsService.helperIdToString(user);
        } catch (error) {
            console.log("Create - User");
            console.log(error);
            return null;
        }
    } 

    async update(updateUserDto: UpdateUserDto) {
        try{
            const exists = await this.prisma.tb_users.findFirst({
                where: { id:updateUserDto.id}
            })

            if (exists === null) {
                return false;
            }

            const user = await this.prisma.tb_users.update({
                where: { id: updateUserDto.id },
                data: {
                    name: updateUserDto.name
                }
            })

            return await this.utilsService.helperIdToString(user)
        } catch (error){
            console.log('Update - User');
            console.log(error);
            return null;
        }
    }

    async getById(id: string) {
        try {
            const user = await this.prisma.tb_users.findFirst({
                where: {idGoogle: id}
            })

            if (!user){
                return false;
            }

            return user;
            
        } catch (error) {
            console.log("Get by Id - User");
            console.log(error);
            return null;
        }
    }
}