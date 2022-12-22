import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormComponent } from '././contentComponents/form/form.component';
import { ModalWindowComponent } from './contentComponents/modalWindow/modalWindow.component';
import { EditComponent } from './contentComponents/users/user-list/edit/edit.component';
import { LeftMenubarComponent } from './left-menubar/left-menubar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UsersComponent } from './contentComponents/users/users.component';
import { UserListComponent } from './contentComponents/users/user-list/user-list.component';
import { UserResolve } from './contentComponents/users/userResolver';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    UserListComponent,
    ModalWindowComponent,
    EditComponent,
    LeftMenubarComponent,
    MainContentComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [UserResolve],
  bootstrap: [AppComponent]
})
export class AppModule { }
