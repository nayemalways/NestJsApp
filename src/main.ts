import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet'; // Security package

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable security headers
  app.use(helmet());

  // Enable CORS (if needed)
  app.enableCors();

  await app.listen(3000);
  console.log(`Server running on http://localhost:3000`);
}
bootstrap();
