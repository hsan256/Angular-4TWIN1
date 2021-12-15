import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  list : User[];
  listInitiale : User[]; //list intérmidiaire

  users : User[];
  show : Boolean =false;
  myUser : User ;
  showEdit(u:User){
    this.show=true;
    //this.show=!this.show; // tekhou 3akkes l'état
    this.myUser=u;}

    updateUser(u:User){
      for(let k in this.users){
        if(this.users[k].id == u.id)
        this.users[k]=u;
      }
    }
  constructor(private us:UserService, private ac:ActivatedRoute) { }

  ngOnInit(): void {

        //this.list=this.us.getAllUsers();
        this.us.getAllUsers().subscribe(res=>{this.list=res;

          this.listInitiale=this.list;
          this.ac.paramMap.subscribe(res=> { console.log(res.get('role'));
          this.list=this.listInitiale.filter((User) =>{return User.adminuser === res.get('role');
        })
        }
          )  
          
      })
  }

  getUserCategory(c: string){
   if(c=='Admin')
   {return true; }
   else { return false};
  }

}