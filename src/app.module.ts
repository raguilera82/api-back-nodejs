import { UsersModule } from './users/users.module';
import { SecurityModule } from './security/security.module';
import { QuotesModule } from './quotes/quotes.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

@Module({
  imports: [
    QuotesModule, 
    UsersModule,
    SecurityModule
  ],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {}
