import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
 @ApiProperty({ example: 'bisma@gmail.com', description: 'Valid email address' })
  @IsEmail()
  email!: string;
 @ApiProperty({ example: 'secure123', description: 'password that you saved while registration' })
  @IsString()
  @IsNotEmpty()
  password!: string;
}