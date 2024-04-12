import { Injectable } from "@nestjs/common";
import { PriorityRepository } from "./repository/priority.repository";
import { CreatePriorityDto } from "./dto/create-priority.dto";
import { UpdatePriorityDto } from "./dto/update-priority.dto";

@Injectable()
export class PriorityService {
  constructor(private readonly priorityRepository: PriorityRepository) {}

  async create(createPriorityDto: CreatePriorityDto) {
    return await this.priorityRepository.create(createPriorityDto);
  }

  async update(updatePriorityDto: UpdatePriorityDto) {
    return await this.priorityRepository.update(updatePriorityDto);
  }

  async getAll() {
    return await this.priorityRepository.getAll();
  }
}
