import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const port = 314;
declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  console.log(`server is running at ${port} port`)

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();