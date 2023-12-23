import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(3000, () => {
    console.log('---------------------------------');
    console.log(`🚀 App is listening on ${3000} 🚀`);
    console.log('---------------------------------');
  });
}
bootstrap();
