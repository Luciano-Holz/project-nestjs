import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from 'src/controllers/app.controller';
import { PeopleModule } from './people.module';


@Module({
  imports: [TypeOrmModule.forRoot(), PeopleModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
