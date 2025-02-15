import { Body, Controller, Get, Post, BadRequestException } from '@nestjs/common';
import { SuperheroService } from '../../../application/superhero.service';
import { CreateSuperheroDto } from './dto/create-superhero.dto';

@Controller('superheroes')
export class SuperheroController {
  constructor(private readonly superheroService: SuperheroService) {}

  @Post()
  async addSuperhero(@Body() createSuperheroDto: CreateSuperheroDto) {
    const { name, superpower, humilityScore } = createSuperheroDto;
    const superhero = await this.superheroService.createSuperhero(name, superpower, humilityScore);
    return superhero;
  }

  @Get()
  async getSuperheroes() {
    return this.superheroService.getSuperheroes();
  }
}
