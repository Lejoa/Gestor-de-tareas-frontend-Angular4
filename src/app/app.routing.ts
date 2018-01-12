import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Components/Login.component';
import { RegisterComponent } from './Components/Register.component';
import { DefaultComponent } from './Components/Default.component';


const appRoutes: Routes = [
	/*Cuando la ruta este vacia me carga el LoginComponent*/
	{path:'', component: DefaultComponent},
	{path:'login', component: LoginComponent},
	{path:'login/:id', component: LoginComponent},
	{path:'register', component: RegisterComponent},
	{path:'**', component: LoginComponent}

];

/*Esto nos va a poder permitir cargar el servicio a 
nivel global*/
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders =  RouterModule.forRoot(appRoutes);
