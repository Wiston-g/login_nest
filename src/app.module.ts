import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginController } from './login/login.controller';
import { RegisterController } from './register/register.controller';
import { RegisterService } from './register/register.service';
import { RegisterModule } from './register/register.module';

@Module({
  imports: [RegisterModule],
  controllers: [AppController, LoginController, RegisterController],
  providers: [AppService, RegisterService],
})
export class AppModule {}
