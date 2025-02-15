// src/domain/superhero.entity.ts
export class Superhero {
  public id?: number;
  
  constructor(
    public name: string,
    public superpower: string,
    public humilityScore: number,
  ) {}
}
