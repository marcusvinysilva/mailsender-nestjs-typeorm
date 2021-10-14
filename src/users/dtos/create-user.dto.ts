import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Informe um endereço de email' })
  @IsEmail({}, { message: 'Informe um endereço de email válido' })
  email: string;

  name: string;

  password: string;

  passwordConfirmation: string;
}
