import { Injectable } from '@angular/core';
import { ApiConstant } from 'src/app/util/ApiConstant';

@Injectable({
    providedIn: 'root'
})
export class TokenService {

    constructor(){}

    logOut(){
        window.sessionStorage.clear();
    }

    public saveToken(token: string){
        window.sessionStorage.removeItem(ApiConstant.TOKEN_KEY);
        window.sessionStorage.setItem(ApiConstant.TOKEN_KEY, token);    
    }

    public getToken(): string {
        return sessionStorage.getItem(ApiConstant.TOKEN_KEY);
    }

    public saveUser(user: string) {
        window.sessionStorage.removeItem(ApiConstant.USER_KEY);
        window.sessionStorage.setItem(ApiConstant.USER_KEY, JSON.stringify(user));
    }

    public getUser(){
        return JSON.parse(sessionStorage.getItem(ApiConstant.USER_KEY));
    }
}