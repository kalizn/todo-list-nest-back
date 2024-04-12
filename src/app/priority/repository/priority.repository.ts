import { PrismaService } from "src/app/prisma/prisma.service";
import { UtilsService } from "src/app/utils/utils.service";
import { CreatePriorityDto } from "../dto/create-priority.dto";
import { UpdatePriorityDto } from "../dto/update-priority.dto";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PriorityRepository {
    constructor(
        private readonly prisma: PrismaService,
        private readonly utilsService: UtilsService
    ) {}

    async create(createPriority: CreatePriorityDto) {
        try{
            const exists = await this.prisma.tb_priority.findFirst({
                where: {
                    name: createPriority.name
                }
            });

            if (exists) {
                return false;
            }

            const priority = await this.prisma.tb_priority.create({
                data: {
                    name: createPriority.name
                }
            })

            return await this.utilsService.helperIdToString(priority);
        } catch (error) {
            console.log("Create - Priority");
            console.log(error);
            return null;
        }
    } 

    async update(updatePriority: UpdatePriorityDto) {
        try{
            const exists = await this.prisma.tb_priority.findFirst({
                where: { id:updatePriority.id}
            })

            if (exists === null) {
                return false;
            }

            const existsName = await this.prisma.tb_priority.findFirst({
                where: {
                    name: updatePriority.name,
                    id: {
                        not: updatePriority.id
                    }
                }
            })

            if (existsName) {
                return false;
            }

            const priority = await this.prisma.tb_priority.update({
                where: { id: updatePriority.id },
                data: {
                    active: updatePriority.active,
                    name: updatePriority.name
                }
            })

            return await this.utilsService.helperIdToString(priority)
        } catch (error){
            console.log('Update - Priority');
            console.log(error);
            return null;
        }
    }

    async getAll() {
        try {
          const priority = await this.prisma.tb_priority.findMany();
    
          const newPriority = [];
    
          for (const el of priority) {
            newPriority.push(await this.utilsService.helperIdToString(el));
          }
    
          return newPriority;
        } catch (error) {
          console.log("Get All - Priority");
          console.log(error);
          return null;
        }
      }
}