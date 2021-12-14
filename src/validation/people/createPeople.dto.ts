import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString, MinLength } from 'class-validator';
import * as Joi from 'joi';
import { CREATE, JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import { cpfRegex, senhaRegex } from 'src/utils/regex';

@JoiSchemaOptions({
  allowUnknown: false,
})
export class CreatePeopleDto {
  @ApiProperty()
  @JoiSchema(Joi.string().trim().min(2).max(30).required())
  @JoiSchema([CREATE], Joi.string().trim().min(2).max(30).required())
  @IsString()
  @MinLength(3)
  nome: string;

  @ApiProperty()
  @JoiSchema(Joi.string().trim().regex(cpfRegex).message('"cpf" has an Invalid format, it should be xxx.xxx.xxx-xx').required())
  @JoiSchema([CREATE], Joi.string().trim().regex(cpfRegex).message('"cpf" has an Invalid format, it should be xxx.xxx.xxx-xx').required())
  @IsString()
  cpf: string;

  @ApiProperty()
  @JoiSchema(Joi.string().trim().required())
  @JoiSchema([CREATE], Joi.string().trim().required())
  @IsString()
  data_nascimento: string;

  @ApiProperty()
  @JoiSchema(
    Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'br'] },
      })
      .required(),
  )
  @JoiSchema(
    [CREATE],
    Joi.string()
      .trim()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ['com', 'net', 'br'] },
      })
      .required(),
  )
  @IsString()
  @IsEmail()
  email: string;

  @ApiProperty()
  @JoiSchema(Joi.string().regex(senhaRegex).message('"senha" should have at least three alphanumeric characters').required())
  @JoiSchema(
    [CREATE],
    Joi.string().regex(senhaRegex).message('"senha" should have at least three alphanumeric characters').required(),
  )
  @IsString()
  @MinLength(6)
  senha: string;

  @ApiProperty()
  @JoiSchema(Joi.string().trim().valid('sim', 'nao').required())
  @JoiSchema([CREATE], Joi.string().trim().valid('sim', 'nao').required())
  @IsString()
  habilitado: string;
}
