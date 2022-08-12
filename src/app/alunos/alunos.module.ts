import { AlunosComponent } from './alunos.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { AlunosFormComponent } from './aluno-form/alunos-form.component';


@NgModule ({
 imports: [
    CommonModule,

 ],
 exports:[],
 declarations: [
    AlunosComponent,
    AlunosFormComponent,

],
 providers:[],
})
export class AlunosModule {}
