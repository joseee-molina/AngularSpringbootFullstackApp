import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TavoComponent } from './tavo/tavo.component';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';

//NgModule is the angular module
//What is this? How is it different from JS modules?
//Notes in the google docs notes
@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    TavoComponent,
    LoginComponent,
    ErrorsComponent,
    ListTodosComponent,
    MenuComponent,
    FooterComponent,
    LogoutComponent,
    TodoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  //Added FormsModule so that we can use the [(ngModel)]="username"
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
