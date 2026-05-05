import { IsEmail,  IsNotEmpty,MinLength, IsString } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto{
@ApiProperty({ example: 'Bisma Abbasi', description: 'Full name of user' })
@IsString()
@IsNotEmpty()
name!:string
 @ApiProperty({ example: 'bisma@gmail.com', description: 'Valid email address' })
@IsString()
@IsNotEmpty()
@IsEmail()
email!:string
 @ApiProperty({ example: 'secure123', description: 'Minimum 6 characters' })
@IsString()
@IsNotEmpty()
@MinLength(8)
password!:string





}