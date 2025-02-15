// src/infrastructure/in-memory-superhero.repository.ts
import { Injectable } from '@nestjs/common';
import { Superhero } from '../domain/superhero.entity';
import { SuperheroRepository } from '../domain/ports/superhero.repository';

@Injectable()
export class InMemorySuperheroRepository implements SuperheroRepository {
  private superheroes: Superhero[] = [];
  private nextId = 1;

  async add(superhero: Superhero): Promise<Superhero> {
    superhero.id = this.nextId++;
    this.superheroes.push(superhero);
    return superhero;
  }

  async getAll(): Promise<Superhero[]> {
    return this.superheroes.sort((a, b) => (b.humilityScore - a.humilityScore));
  }
}
