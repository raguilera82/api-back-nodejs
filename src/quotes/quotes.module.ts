import { QuotesService } from './quotes.service';
import { Module } from '@nestjs/common';

import { QuotesController } from './quotes.controller';

@Module({
    controllers: [QuotesController],
    components: [QuotesService]
})
export class QuotesModule {

}