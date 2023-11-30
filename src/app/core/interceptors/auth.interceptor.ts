import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpInterceptor } from '@angular/common/http';

// libs
import { catchError, finalize } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private injector: Injector
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let url = req.url.indexOf('/login');

    let authService = this.injector.get(AuthService);
    let headers = req.clone();

    if (url < 0) {
      let token = authService.getToken();
      headers = req.clone({
        headers: req.headers.set('Authorization', `Basic ${token}`)
      });
    }

    return next.handle(headers);
  }
}
