import { Routes } from '@angular/router';
import { MenuComponent } from './components/layout/menu/menu.component';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { InicioComponent } from './components/layout/inicio/inicio.component';
import { ProfessoresListComponent } from './components/professor/professores-list/professores-list.component';
import { AlunoListComponent } from './components/aluno/aluno-list/aluno-list.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';
import { TurmaListComponent } from './components/turma/turma-list/turma-list.component';
import { AlunoFormComponent } from './components/aluno/aluno-form/aluno-form.component';
import { professorFormComponent } from './components/professor/professor-form/professor-form.component';
import { CursoFormComponent } from './components/curso/curso-form/curso-form.component';
import { TurmaFormComponent } from './components/turma/turma-form/turma-form.component';

export const routes: Routes = [

    {path : "", redirectTo: "login",pathMatch:`full`},
    {path : "login", component: LoginComponent},
    
    {path: "admin", component: PrincipalComponent, children:[
        {path: "inicio", component:InicioComponent},

        {path: "aluno", component: AlunoListComponent},
        {path: "aluno/new", component: AlunoFormComponent},
        {path: "aluno/edit/:id", component: AlunoFormComponent},

        {path: "professor", component: ProfessoresListComponent},
        {path: "professor/new", component: professorFormComponent},
        {path: "professor/edit/:id",component: professorFormComponent},


        {path : "curso", component: CursoListComponent},
        {path:"curso/new",component: CursoFormComponent},
        {path:"curso/edit/:id",component: CursoFormComponent},




        {path: "turma", component: TurmaListComponent},
        {path:"turma/new", component: TurmaFormComponent},
        {path:"turma/edit/:id",component:TurmaFormComponent}



        
       
    ]}
];
