import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {

  user : User = new User(); 
  list : User[];
  constructor(private us : UserService ) { }

  ngOnInit(): void {
  this.us.getAllUsers().subscribe(resul=>{this.list=resul})
  }

}
