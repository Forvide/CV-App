import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { RegisterComponent } from './register/register.component';
import { SkillsComponent } from './skills/skills.component';

const routes: Routes = [
  {path:'', component: AboutComponent},
  {path:'skills', component: SkillsComponent},
  {path:'projects', component: ProjectsComponent},
  {path:'contacts', component: ContactsComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent},
  {path:'error', component: ErrorComponent},
  {path: '**', redirectTo:'/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
