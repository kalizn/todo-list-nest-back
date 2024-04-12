import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {
    @IsString({ message: "o idGoogle deve ser do tipo string" })
    @IsNotEmpty({ message: "O campo idGoogle, não pode estar vazio!" })
    @ApiProperty()
    idGoogle: string;

    @IsString({ message: "O name deve ser do tipo string" })
    @IsNotEmpty({ message: "O campo name, não pode estar vazio!" })
    @ApiProperty()
    name: string;
}