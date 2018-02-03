import { QuotesService } from './quotes.service';

import { Test } from '@nestjs/testing';

describe('Quotes service', () => {
    let quotesService: QuotesService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            components: [QuotesService]
        }).compile();

        quotesService = module.get<QuotesService>(QuotesService);
    });

    it('should get random quote', () => {
        const quote = quotesService.getRandomQuote();
        expect(quote).not.toBeNull();
    });



    

})