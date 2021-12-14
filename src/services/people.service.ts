import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePeopleDto } from '../validation/people/createPeople.dto';
import { Repository } from 'typeorm';
import { People } from '../models/people.entity';

export type PeopleType = object;

@Injectable()
export class PeopleService {
  constructor(
    @InjectRepository(People)
    private peopleRepository: Repository<People>,
  ) {}

  async create(createPeopleDto: CreatePeopleDto): Promise<People> {
    const newPeople = this.peopleRepository.create(createPeopleDto);
    return this.peopleRepository.save(newPeople);
  }

  async findAll() {
    return this.peopleRepository.find();
  }
}
