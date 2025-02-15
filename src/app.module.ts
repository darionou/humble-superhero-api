import { Module } from '@nestjs/common';
import { SuperheroController } from './adapters/inbound/http/superhero.controller';
import { SuperheroService } from './application/superhero.service';
import { InMemorySuperheroRepository } from './infrastructure/in-memory-superhero.repository';

@Module({
  imports: [],
  controllers: [SuperheroController],
  providers: [
    SuperheroService,
    {
      provide: 'SuperheroRepository',
      useClass: InMemorySuperheroRepository,
    },
  ],
})
export class AppModule {}
