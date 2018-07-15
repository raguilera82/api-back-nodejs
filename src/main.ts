import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(ApplicationModule);
	app.enableCors({
		origin: '*'
	});
	const port: number = parseInt(process.env.PORT) || 3001;
	await app.listen(port);
}
bootstrap();
