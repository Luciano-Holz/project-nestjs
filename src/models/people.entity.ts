import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
@Unique(['cpf'])
export class People {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  @ApiProperty()
  nome: string;

  @Column({ nullable: false, type: 'varchar', length: 14 })
  @ApiProperty()
  cpf: string;

  @Column({ nullable: false, type: 'varchar', length: 10 })
  @ApiProperty()
  data_nascimento: string;

  @Column({ nullable: false, type: 'varchar', length: 100 })
  @ApiProperty()
  email: string;

  @Column({ nullable: false, select: false })
  @ApiProperty()
  senha: string;

  @Column('enum', { enum: ['sim', 'nao'] })
  @ApiProperty()
  habilitado: string;

  @CreateDateColumn({ select: false })
  data_criacao: Date;

  @UpdateDateColumn({ select: false })
  data_atualizacao: Date;
}
