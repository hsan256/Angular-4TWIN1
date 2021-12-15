import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedIn : boolean;
  constructor(
    private authService : AuthenticationService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.loggedIn = this.authService.isUserLoggedIn();
  }
  logout(){
    this.authService.logout();
    this.router.navigate(['/login'])
  }

}
