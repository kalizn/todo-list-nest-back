import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePriorityDto {
    @IsString({ message: "o name deve ser do tipo string!" })
    @IsNotEmpty({ message: "O campo name, não pode estar vazio!" })
    @ApiProperty()
    name: string;
}