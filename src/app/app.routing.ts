import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";

const appRoutes: Routes = [


{path: 'login', component: LoginComponent},
{path:'',component:HomeComponent},


];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes)