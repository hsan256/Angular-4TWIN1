import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { Client } from 'src/app/Models/client';
import { ClientService } from '../../../Services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {

  list: Client[];
  client : Client = new Client ();
  search: any;
  p:number=1;

  constructor(private cs:ClientService) { }

  ngOnInit(): void {
    this.cs.getAllClients().subscribe(resul=>{this.list=resul})
  }

  deleteClient(c:Client){
    this.cs.deleteClient(c).subscribe(); }
  

  Search(){
    if(this.search==""){
      this.ngOnInit();
    }
    else {
      this.list = this.list.filter(res=> {
        return res.prenom.toLocaleLowerCase().match(this.search.toLocaleLowerCase());
    })
    }}
key : any ;
reverse: boolean=false;
sort(key){
  this.key=key;
  this.reverse=!this.reverse;
}
public openPDF():void {
  let DATA = document.getElementById('htmlData');
      
  html2canvas(DATA).then(canvas => {
      
      let fileWidth = 208;
      let fileHeight = canvas.height * fileWidth / canvas.width;
      
      const FILEURI = canvas.toDataURL('C:/Users/ASUS/Documents/Angular workspace/GestionMagasin-Angular-main/src/png')
      let PDF = new jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight)
      
      PDF.save('List-client.pdf');
  });     
  }

  }
