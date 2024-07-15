import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  ValidateIf,
  isNotEmpty, IsNumber,
} from 'class-validator';

export class CreateUserDto {

  @IsNotEmpty()
  @IsNumber()
  age: number;

  @IsString()
  @IsNotEmpty()
  @Transform((obj) => String(obj.value).trim())
  nom: string;

  @IsString()
  @IsNotEmpty()
  @Transform((obj) => String(obj.value).trim())
  prenom: string;

  @IsEmail()
  @IsNotEmpty()
  @Transform((obj) => String(obj.value).trim())
  email: string;

}
