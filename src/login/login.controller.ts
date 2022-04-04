import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('login')
export class LoginController {

    @Get()
    getLogin(): {}{
        return {"saludo":'Bienvenido a Bixxus, si no tiene una cuenta tiene que registrarse'}
    }

    @Post()
    userLogin(@Body() user): string{
        console.log(user);
        
        return "Usuario creado";
    }

}
