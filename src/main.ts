import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('bootstrap');
  
  app.enableCors({
    origin: '*',  // Permite solicitudes desde cualquier dominio
    methods: 'GET, POST, PUT, DELETE',  // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization',  // Cabeceras permitidas
    credentials: false,  // No es necesario manejar credenciales (como cookies o cabeceras de autenticación)
  });
  app.setGlobalPrefix('api');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true
    })
  );


  await app.listen(process.env.PORT ?? 3000);
}




bootstrap();
