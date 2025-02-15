import { Inject, Injectable } from '@nestjs/common';
import { Superhero } from '../domain/superhero.entity';
import { SuperheroRepository } from '../domain/ports/superhero.repository';

@Injectable()
export class SuperheroService {
  constructor(
    @Inject('SuperheroRepository')
    private readonly repository: SuperheroRepository,
  ) {}

  async createSuperhero(name: string, superpower: string, humilityScore: number): Promise<Superhero> {
    const superhero = new Superhero(name, superpower, humilityScore);
    return this.repository.add(superhero);
  }

  async getSuperheroes(): Promise<Superhero[]> {
    return this.repository.getAll();
  }
}
