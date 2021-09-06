import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { CommentSectionComponent } from './comment-section/comment-section.component';
import { CommentFormComponent } from './comment-form/comment-form.component';
import { StyleDirective } from './directives/style.directive';
import { HideElementDirective } from './directives/hide-element.directive';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CommentSectionComponent,
    CommentFormComponent,
    StyleDirective,
    HideElementDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
