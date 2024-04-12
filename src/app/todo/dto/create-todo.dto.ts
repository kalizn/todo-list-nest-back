import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateToDoDto {
    @IsNumber({}, { message: "o idUser deve ser do tipo number" })
    @IsNotEmpty({ message: "O campo idUser, não pode estar vazio!" })
    @ApiProperty()
    idUser: number;

    @IsString({ message: "O title deve ser do tipo string" })
    @IsNotEmpty({ message: "O campo title, não pode estar vazio!" })
    @ApiProperty()
    title: string;

    @IsString({ message: "A description deve ser do tipo string" })
    @IsNotEmpty({ message: "O campo description, não pode estar vazio!" })
    @ApiProperty()
    description: string;

    @IsNumber({}, { message: "A priority deve ser do tipo number!" })
    @IsNotEmpty({ message: "O campo priority, não pode estar vazio!" })
    @ApiProperty()
    priorityId: number

    @IsString({ message: "A finalDate deve ser do tipo string" })
    @ApiProperty()
    finalDate: string;
}