import { QuotesController } from './quotes.controller';
import { QuotesService } from "./quotes.service";
import { Test } from '@nestjs/testing';

describe('Quotes controller', () => {
    let quotesController: QuotesController;
    let quotesService: QuotesService;

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [QuotesController],
            components: [QuotesService]
        }).compile();

        quotesController = module.get<QuotesController>(QuotesController);
    });

    it('should get public random quote', () => {
        const publicQuote = quotesController.randomQuote();
        expect(publicQuote).not.toBeNull();
    });

    it('should get protected random quote', () => {
        const protectedQuote = quotesController.randomProtectedQuote();
        expect(protectedQuote).not.toBeNull();
    });

});