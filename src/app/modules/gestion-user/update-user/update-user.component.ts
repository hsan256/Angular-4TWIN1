import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

myForm : FormGroup ;
@Input() userToEdit : User;
@Output() edited = new EventEmitter<User>();
  constructor(private router:Router, private us:UserService) { }

  ngOnInit(): void {
    this.myForm= new FormGroup ({
      id : new FormControl(this.userToEdit.id),
      nom : new FormControl(this.userToEdit.nom),
      prenom : new FormControl(this.userToEdit.prenom),
      phone : new FormControl (this.userToEdit.phone),
      username : new FormControl(this.userToEdit.username)
    })
  }
  ngOnChanges(changes:SimpleChanges){
    //1er solution nhotou elli fl ngOnInit fl ngOnChanges
    //2eme solution
    if(!changes.userToEdit.firstChange){
    this.myForm.setControl('id',new FormControl(this.userToEdit.id, ));
    this.myForm.setControl('nom',new FormControl(this.userToEdit.nom));
    this.myForm.setControl('prenom',new FormControl(this.userToEdit.prenom));
    this.myForm.setControl('phone',new FormControl(this.userToEdit.phone));
    this.myForm.setControl('username',new FormControl(this.userToEdit.username));
  }}

  edit (){
    console.log(this.myForm.getRawValue());
    this.edited.emit(this.myForm.getRawValue());
    this.us.updateUser(this.userToEdit).subscribe(res => {  console.log('Product created!');
    this.router.navigateByUrl('/user/listuser');
  });
    this.myForm.reset();
  }
}
