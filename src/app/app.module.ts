

//import { CursosService } from './cursos/cursos.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
//import { CursosComponent } from './cursos/cursos.component';
import { LoginComponent } from './login/login.component';

import { routing } from './app.routing';
//import { CursoDetalheComponent } from './cursos/curso-detalhe/curso-detalhe.component';
//import { CursoNaoEncontradoComponent } from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    //CursosComponent,
    LoginComponent,
    //CursoDetalheComponent,
    //CursoNaoEncontradoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
   AppRoutingModule,
   routing,

   
    
  ],
  //providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
