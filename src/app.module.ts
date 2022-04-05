import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [RegisterModule, 
    TypeOrmModule.forRoot({
      "type": "mysql",
      "host": "localhost",
      "port": 3306,
      "username": "root",
      "password": "",
      "database": "test",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true
    })
    ],
      controllers: [AppController, LoginController, RegisterController],
      providers: [AppService, RegisterService],
})
export class AppModule {}
