import { QuotesModule } from './quotes/quotes.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [QuotesModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
