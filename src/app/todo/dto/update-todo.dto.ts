import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";
import { CreateToDoDto } from "./create-todo.dto";

export class UpdateToDoDto extends CreateToDoDto{
    @IsNumber({}, { message: "O id deve ser do tipo number" })
    @IsNotEmpty({ message: "O campo id, não pode estar vazio!" })
    @ApiProperty()
    id: number;
}