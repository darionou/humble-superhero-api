import { Superhero } from '../superhero.entity';

export interface SuperheroRepository {
  add(superhero: Superhero): Promise<Superhero>;
  getAll(): Promise<Superhero[]>;
}

