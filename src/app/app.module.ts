import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { StyleDirective } from './directives/style.directive';
import { HideElementDirective } from './directives/hide-element.directive';
import { FilterPipe } from './pipes/filter.pipe';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ErrorComponent } from './error/error.component';
import { TextInputComponent } from './_forms/text-input/text-input.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommentSectionComponent,
    CommentFormComponent,
    StyleDirective,
    HideElementDirective,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactsComponent,
    ErrorComponent,
    TextInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
