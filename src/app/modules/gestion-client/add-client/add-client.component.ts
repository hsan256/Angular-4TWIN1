import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/Models/client';
import { ClientService } from 'src/app/Services/client.service';
import { HttpService } from 'src/app/Services/http.service';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client : Client = new Client ();
  constructor(private cs:ClientService, private router:Router, private httpp : HttpService) { }

  ngOnInit(): void {
  }

  addClient (){
    console.log(this.client);      //Afficher le user dans le console
    this.client.picture = "../../assets/img/theme/"+this.client.picture.substr(12);
      this.cs.addClient(this.client).subscribe (res => {  console.log('Product created!');
    this.router.navigateByUrl('/client/listclient');

  });
  
  let user = {
    name: this.client.nom,
    email: this.client.email,
    sujet: "Bienvnue chez notre projet 4TWIN1",
    html : "Bonjour "+this.client.nom+",  Votre compte est crée avec succès. "

  }
  this.httpp.sendEmail("http://localhost:3000/sendmail", user).subscribe(
    data => {
      let res:any = data; 
      console.log(
        `👏 > 👏 > 👏 > 👏 ${user.name} is successfully register and mail has been sent and the message id is ${res.messageId}`
      );
    },
  );
}}
