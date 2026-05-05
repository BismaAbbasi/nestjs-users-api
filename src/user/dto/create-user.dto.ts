import { IsEmail,IsString,IsNumber,Min,Max, IsNotEmpty, isString, MIN, MAX } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
@ApiProperty({ example: 'bisma@gmail.com', description: 'Valid email address' })
  @IsEmail()
  @IsString()
  email!: string;
@ApiProperty({ example: 'Bisma Abbasi ', description: 'full name' })
  @IsNotEmpty()
  @IsString()
  name!: string;
@ApiProperty({ example: 'Bisma123secure ', description: 'securedpassword with some numeric keys' })
@IsNotEmpty()
  @IsString()
  password!: string;
 
}