import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiConstant } from 'src/app/util/ApiConstant';

const httpHeaders = {
    headers : new HttpHeaders({'Content-Type' : 'application/json'})
}

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private httpClient:HttpClient){}

    login(payload):Observable<any> {
        return this.httpClient.post(ApiConstant.BASE_URL+"auth/login", {
            username : payload.username,
            password : payload.password
        }, httpHeaders);
    }

    // register(payload: PayloadRegister) : Observable<any> {
    //     return this.httpClient.post(ApiConstant.BASE_URL+"auth/register", {
    //         firstName: payload.firstName,
    //         lastName: payload.lastName,
    //         dob: payload.dob,
    //         username: payload.username,
    //         phoneNumber: payload.phoneNumber,
    //         password: payload.password,
    //         email:payload.email,
    //         roles : payload.roles
    //     }, httpHeaders);
    // }
}