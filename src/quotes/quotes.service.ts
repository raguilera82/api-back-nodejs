import { Component } from '@nestjs/common';

import { QUOTES } from './quotes-data';

@Component()
export class QuotesService {

    getRandomQuote(): string {
        const total = QUOTES.length;
        const rand = Math.floor(Math.random() * total);
        return QUOTES[rand];
    }
    
}