import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TavoComponent } from './tavo/tavo.component';
import { LoginComponent } from './login/login.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [AppComponent, WelcomeComponent, TavoComponent, LoginComponent, ErrorsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  //Added FormsModule so that we can use the [(ngModel)]="username"
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
