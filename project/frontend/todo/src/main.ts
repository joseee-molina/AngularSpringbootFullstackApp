import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
//Loading AppModule and bootstraping it.
//Whichever module which is firstly bootstrapped in the angular application is called root module
//AppModule gets initialized -> AppComponent gets initialized -> we get app.component.html -> we use that in index.html

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
