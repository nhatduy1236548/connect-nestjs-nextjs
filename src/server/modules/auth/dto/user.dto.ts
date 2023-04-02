import { IsNotEmpty, Validate } from "class-validator";
import { Unique } from "typeorm";

export class AuthDto {
    @IsNotEmpty()
    @Validate(Unique, 
    [ { table: "user", column: "username" }] )
    username?: string;

    password: string;
}