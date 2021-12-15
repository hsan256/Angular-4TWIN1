import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailFournisseur } from 'src/app/Models/detail-fournisseur';
import { DetailFournisseurService } from 'src/app/Services/detail-fournisseur.service';

@Component({
  selector: 'app-list-detail-fournisseur',
  templateUrl: './list-detail-fournisseur.component.html',
  styleUrls: ['./list-detail-fournisseur.component.css']
})


export class ListDetailFournisseurComponent implements OnInit {
  [x: string]: any;
  

listdp: DetailFournisseur[];
listInitiale: DetailFournisseur[];
show:Boolean = false; 
myDetailProd: DetailFournisseur;
  SearchVal: string = '';    
  
constructor(private df:DetailFournisseurService, private ac : Router) { }

ngOnInit(): void {
  this.df.getAllDetailFournisseur().subscribe(res => {
    this.listdp = res;
    console.log(this.listdp);
    

  })
}
updateDetailFournisseur(f:number){
 this.ac.navigate(["edit-Detail-Fournisseur",f]);
 
}
deleteDetailFournisseur(j: number,f:number) {
  this.listdp.splice(f, 1);
  this.df.deleteDetailFournisseur(j).subscribe();
}

}
