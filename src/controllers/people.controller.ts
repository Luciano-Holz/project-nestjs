import { Body, Controller, Get, Post } from '@nestjs/common';
import { JoiPipe } from 'nestjs-joi';
import { PeopleService } from 'src/services/people.service';
import { CreatePeopleDto } from 'src/validation/people/createPeople.dto';

@Controller('api/v1/people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post()
  async create(@Body(JoiPipe) createPeopleDto: CreatePeopleDto) {
    return this.peopleService.create(createPeopleDto);
  }

  @Get()
  async findAll() {
    return this.peopleService.findAll();
  }
}
