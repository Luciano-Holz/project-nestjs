import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PeopleController } from '../controllers/people.controller';
import { PeopleService } from 'src/services/people.service';
import { People } from 'src/models/people.entity';

@Module({
  imports: [TypeOrmModule.forFeature([People])],
  controllers: [PeopleController],
  providers: [PeopleService],
  exports: [PeopleService],
})
export class PeopleModule {}
