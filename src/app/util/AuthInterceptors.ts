import { Injectable } from '@angular/core';
import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenService } from '../services/login-service/TokenService';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private tokenService:TokenService){}

    intercept(req: import("@angular/common/http").HttpRequest<any>, next: import("@angular/common/http").HttpHandler): import("rxjs").Observable<import("@angular/common/http").HttpEvent<any>> {
        
        let authRequest = req;
        const token = this.tokenService.getToken();

        if(token != null){
            authRequest = req.clone({headers: req.headers.set('Authorization', 'Bearer '+token)});
        }
        return next.handle(authRequest);
    }
}

export const authInterceptorProviders = [
    {provide : HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]