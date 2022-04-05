import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import {CreateUser} from './dto/create-user.dto';
import {register} from './interfaces/register';
import { RegisterService} from './register.service';

@Controller('register')
export class RegisterController {

    constructor(private registerService: RegisterService){}

    @Get()
    getTodosregister(): {}{
        
        return {
                "saludo": "Bienveido a Bixxus por favor llena los campos",
                "login": "Si ya estas registrado ir al login ",
                "archivo": this.registerService.getTodosRegistros(),
                "content-type": "aplication/json",
                "status": 200
                }
    }

    @Get(':id')
    getUnoregister(@Param('id') id: string ): {} {
        
        return {
            "saludo": "Bienveido a Bixxus por favor llena los campos",
            "login": "Si ya estas registrado ir al login ",
            "archivo": this.registerService.getUnRegistro(parseInt(id)),
            "content-type": "aplication/json",
            "status": 200
            }   
        
                
            
    }

    @Post()
    createUser(@Body() user: CreateUser): {}{
  
        return user;
    }

    @Put()
    updateUser(@Body() user: CreateUser, @Param('id') id ): {}{
  
        return user;
    }

    @Delete(':id')
    deleteUser(@Param('id') id ):string{
        console.log(id);
        
        return `Usuario eliminado : ${id}`;
    }
}
