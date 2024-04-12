import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateUserDto {
    @IsNumber({}, { message: "O id deve ser do tipo number" })
    @IsNotEmpty({ message: "O campo id, não pode estar vazio!" })
    @ApiProperty()
    id: number;

    @IsString({ message: "O name deve ser do tipo string" })
    @IsNotEmpty({ message: "O campo name, não pode estar vazio!" })
    @ApiProperty()
    name: string;
}