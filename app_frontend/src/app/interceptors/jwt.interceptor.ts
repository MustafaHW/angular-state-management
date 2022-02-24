import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(
        private authService: AuthService,
    ) { }

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler,
    ): Observable<HttpEvent<unknown>> {

        let token;
        if (!token) {
            return next.handle(request);
        }
        else {
            const clone = request.clone({
                withCredentials: true,
                headers: request.headers.set('Authorization', 'Bearer ' + token)
            });
            return next.handle(clone);
        }
    }
}