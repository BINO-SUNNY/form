import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './register/register';
import { View } from './view/view';

export const routes: Routes = [
    {
        path:'',component:Login
    },
    {
        path:"Register",component:Register
    },
    {
        path:"view",component:View
    }
];
