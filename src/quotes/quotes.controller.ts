import { QuotesService } from './quotes.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class QuotesController {

    constructor(private readonly quotesService: QuotesService){}

    @Get('random-quote')
    randomQuote(): string {
        return this.quotesService.getRandomQuote();
    }

    @Get('protected/random-quote')
    randomProtectedQuote(): string {
        return this.randomQuote();
    }

}