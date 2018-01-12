import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

/*Importar el modulo para el uso de formularios*/

import { FormsModule } from '@angular/forms';

/*Se debe importar y declarar los modulos que se usan*/
import { LoginComponent } from './Components/Login.component';
import { RegisterComponent } from './Components/Register.component';
import { DefaultComponent } from './Components/Default.component';

/*Variables de configuración Routing*/
import { routing, appRoutingProviders } from './app.routing';

/*Importar el modulo para uso de HTTP*/
import { HttpModule, Response, Headers } from '@angular/http';



@NgModule({
  declarations: [
    AppComponent,
    /*Nos crea una instancia de los componentes
    y permiten que esten disponibles globalmente*/
    LoginComponent,
    RegisterComponent,
    DefaultComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [
  	appRoutingProviders

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
