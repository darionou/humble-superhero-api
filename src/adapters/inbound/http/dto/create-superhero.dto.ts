import { IsNotEmpty, IsString, IsNumber, Min, Max } from 'class-validator';

export class CreateSuperheroDto {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  superpower!: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10)
  humilityScore!: number;
}
