import { Injectable } from '@nestjs/common';
import { register } from './interfaces/register';

@Injectable()
export class RegisterService {
    register: register[] = [
        {
            id : 1,
            userName : 'pedro',
            lastName : 'franco',
            nickName : 'pefra',
            email : 'pep@FontFace.com',
            cellphone : 111111,
            password : 'lala',
            confirmPassword : 'lala'
        },
        {
            id : 2,
            userName : 'alejandro',
            lastName : 'franco',
            nickName : 'pefra',
            email : 'pep@FontFace.com',
            cellphone : 111111,
            password : 'lala',
            confirmPassword : 'lala'
        },
        {
            id : 3,
            userName : 'jesus',
            lastName : 'franco',
            nickName : 'pefra',
            email : 'pep@FontFace.com',
            cellphone : 111111,
            password : 'lala',
            confirmPassword : 'lala'
        }
    ];

    getTodosRegistros(): register[] {
        return this.register;
    };

    getUnRegistro(id): register {
        return this.register.find(register => register.id === id);
    };
}
