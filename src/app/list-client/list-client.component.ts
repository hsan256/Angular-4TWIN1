import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from '../models/client';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  list: Client[];
  client : Client = new Client ();

  constructor(private cs:ClientService) { }

  ngOnInit(): void {
    this.cs.getAllClients().subscribe(resul=>{this.list=resul})
  }

}