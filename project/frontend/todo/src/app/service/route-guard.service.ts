import { Injectable } from '@angular/core';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';
import { Router } from '@angular/router';
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
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    }
    this.router.navigate(['']);
    return false;
  }
}
