import { NgModule } from "@angular/core";
import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CursoDetalheComponent } from "./cursos/curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./cursos/curso-nao-encontrado/curso-nao-encontrado.component";
import { CursosComponent } from "./cursos/cursos.component";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [
{path: 'cursos', component: CursosComponent},
{path: 'curso/:id', component: CursoDetalheComponent},
{path: 'login', component: LoginComponent},
{path:'',component:HomeComponent},
{path:'naoEncontrado',component:CursoNaoEncontradoComponent}

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class  AppRoutingModule{}