import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';
import { FindValueSubscriber } from 'rxjs/internal/operators/find';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  isUserLogged=true;
  canActivate(


    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log("Guard Activated")


    return true;

  }

}
