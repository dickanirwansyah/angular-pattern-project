import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login-service/LoginService';
import { TokenService } from 'src/app/services/login-service/TokenService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {}
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessageLogin = "";
  roles: string[] = [];

  constructor(private loginService : LoginService, 
    private tokenService : TokenService, private router : Router){}

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.login(this.form).subscribe(
      resultJson => {
        this.tokenService.saveToken(resultJson.token);
        this.tokenService.saveUser(resultJson);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles
        this.redirectToHome();
      },
      err => {
        //this.errorMessageLogin = err.error.message();
        if(err.status === 401){
          console.log("Error Code = "+ err.status);
          console.log("Error Message = "+err.error.message);
          console.log("Error Path = "+err.error.path);
          alert(err.error.error);
        }
        this.isLoginFailed = true;
      }   
    )
  }

  redirectToHome(){
    this.router.navigateByUrl("/home/category");
  }
}
