import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectionDetails } from '../Models/ConnectionDetails';
import { LoginDetails } from '../Models/LoginDetails';
import { User } from '../Models/user';
import { AuthenticationService } from '../Services/authentication.service';
import { GlobalService } from '../Services/global.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  connectionDetails : ConnectionDetails = new ConnectionDetails();
  loginDetails : LoginDetails;
  invalidLogin = false;
  user = new User();
  erreur=0;
  constructor(
    private router :Router,
    private authenticationService : AuthenticationService,
    private globalVariables : GlobalService,
  ) { }

  ngOnInit(): void {
    localStorage.setItem('token', '');
  }

  onLoggedin() {
    console.log("loggin in ..")
    console.log(this.connectionDetails);
    this.authenticationService.authenticate(this.connectionDetails).subscribe(
      res => {
        console.log("here")
        console.log(res)
        this.loginDetails = res
        this.globalVariables.role = this.loginDetails.roles[0]
        this.globalVariables.token = this.loginDetails.tokenType+" "+this.loginDetails.accessToken
        this.globalVariables.username=this.loginDetails.username;
        localStorage.setItem('token', this.globalVariables.token);
        //sessionStorage.setItem('username',this.username);
        this.invalidLogin= false;
        this.router.navigate(['user/listuser']);
        
      },error=>{
        this.invalidLogin=true;  
        console.log(error);
        this.erreur=1;

      })
    }
    
}
