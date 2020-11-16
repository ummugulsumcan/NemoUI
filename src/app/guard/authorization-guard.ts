import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthenticationService} from '../shared/services/authentication.service';
import {UserService} from '../shared/services/user-service';
import {NgxRolesService} from 'ngx-permissions';


@Injectable()
export class AuthorizationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private userService: UserService,
              private roleService: NgxRolesService) {
  }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    return await this.roleService.hasOnlyRoles('ADMIN');


  }
}
