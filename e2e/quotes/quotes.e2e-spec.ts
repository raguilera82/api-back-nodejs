import { Test } from '@nestjs/testing';
import * as express from 'express';
import * as request from 'supertest';

import { QuotesModule } from './../../src/quotes/quotes.module';
import { INestApplication } from '@nestjs/common';


describe('Quotes', () => {

    let server;
    let app: INestApplication;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            imports: [QuotesModule]
        }).compile();

        server = express();
        const app = module.createNestApplication(server);
        await app.init();

    });

    it('/GET api/random-quote', () => {
        return request(server)
            .get('/api/random-quote')
            .expect(200)
    });

    afterAll(async () => {
        await app.close();
    });

});