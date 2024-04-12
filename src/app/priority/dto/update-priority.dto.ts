import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdatePriorityDto {
    @IsString({ message: "O name deve ser do tipo string!" })
    @IsNotEmpty({ message: "O campo name, não pode estar vazio!" })
    @ApiProperty()
    name: string;

    @IsNumber({}, { message: "O id deve ser do tipo number!" })
    @IsNotEmpty({ message: "O campo id, não pode estar vazio!" })
    @ApiProperty()
    id: number;

    @IsBoolean({ message: "O active deve ser do tipo boolean!" })
    @IsNotEmpty({ message: "O campo active, não pode estar vazio!" })
    @ApiProperty()
    active: boolean;
}