import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from './basic-authentication.service';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouteGuardService implements CanActivate {
  //Important: It must implement CanActivate from @angular/router

  constructor(
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private router: Router,
    private basicAuthenticationService: BasicAuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.basicAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
