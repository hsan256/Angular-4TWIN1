import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Facture } from 'src/app/Models/facture';
import { FactureService } from 'src/app/Services/facture.service';

@Component({
  selector: 'app-list-factures',
  templateUrl: './list-factures.component.html',
  styleUrls: ['./list-factures.component.css']
})

export class ListFacturesComponent implements OnInit {

  listFactures : Facture[];
  searchVal : string ;

  constructor(private factureService : FactureService, private router : Router ) { }

  ngOnInit(): void {
    this.retrieveNotPaidFacture()
  }
  
  retrieveNotPaidFacture(){
    this.factureService.getActiveFactures().subscribe(
      res => {
        console.log('Factures :');
        this.listFactures= res ;
        console.log(this.listFactures);
      });
    err => {
      console.log(err);
    }
  }

  searchNotPaidFacture(){
    if (this.searchVal===""){
      this.retrieveNotPaidFacture();
    }else{
      this.factureService.searchActiveFactures(this.searchVal).subscribe(
        res => {
          console.log('Factures :');
          this.listFactures= res ;
          console.log(this.listFactures);
        });
      err => {
        console.log(err);
      }
    }
    
  }
  deleteFacture(idFacture: number){
    this.factureService.deleteFactureById(idFacture).subscribe(
      res => {
        console.log('Facture deleted!');
        this.retrieveNotPaidFacture();
      });
    err => {
      console.log(err);
    }
  }
  updateFacture(id:number){
    this.router.navigate(['/facture/update',id])
  }

  /** Sorting   and pagination**/
  key : string ='f.client.nom';
  reverse :boolean = false ;
  page : number = 1 ;
  sort(){
    this.reverse = ! this.reverse ;
  }

}
