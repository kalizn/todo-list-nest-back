import { Injectable } from "@nestjs/common";
import { UserRepository } from "./repository/user.repository";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.create(createUserDto);
  }

  async update(updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(updateUserDto);
  }

  async getById(id: string) {
    return await this.userRepository.getById(id);
  }

}
