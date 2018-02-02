import { QuotesService } from './quotes.service';
import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class QuotesController {

    constructor(private readonly quotesService: QuotesService){}

    @Get('random-quote')
    ramdomQuote(): string {
        return this.quotesService.getRandomQuote();
    }

}