import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('SuperheroController (e2e)', () => {
  let app: INestApplication;
  
  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    await app.init();
  });

  afterEach(async () => {
    await app.close();
  });

  it('/POST superheroes - creates a new superhero', () => {
    return request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Iron Man', superpower: 'Tech', humilityScore: 7 })
      .expect(201)
      .then((response: any) => {
        expect(response.body).toHaveProperty('id');
        expect(response.body.name).toEqual('Iron Man');
      });
  });

  it('/GET superheroes - return all superheroes', async () => {
    await request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Captain America', superpower: 'Leadership', humilityScore: 9 })
      .expect(201);

    await request(app.getHttpServer())
      .post('/superheroes')
      .send({ name: 'Hulk', superpower: 'Strength', humilityScore: 5 })
      .expect(201);

    const response = await request(app.getHttpServer())
      .get('/superheroes')
      .expect(200);
      
    expect(response.body[0].name).toEqual('Captain America');
    expect(response.body[1].name).toEqual('Hulk');
  });

  afterAll(async () => {
    await app.close();
  });
});
