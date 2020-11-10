import {Injectable} from '@angular/core';
import {HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {delay, dematerialize, materialize, mergeMap} from 'rxjs/operators';
import {login, role} from './login-backend';
import { getProductList} from './product-backend';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, body, params} = request;


    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {

        /** LOGIN **/
        case url.endsWith('/users') && method === 'POST':
          return login(body);
        case url.endsWith('/users') && method === 'GET':
          return role(params);
        /** PRODUCT **/
        case url.endsWith('/products') && method === 'GET':
          return getProductList();
        default:
          return next.handle(request);
      }
    }
  }
}

// helper functions

export function error(message) {
  return throwError({error: message});
}

export function ok(responseBody?) {
  return of(new HttpResponse({status: 200, body: responseBody}));
}


export let fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
