import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Fournisseur } from 'src/app/Models/fournisseur';
import { DetailFournisseurService } from 'src/app/Services/detail-fournisseur.service';
import { FournisseurService } from 'src/app/Services/fournisseur.service';
import { AddDetailFournisseurComponent } from '../../detailfournisseur/add-detail-fournisseur/add-detail-fournisseur.component';

@Component({
  selector: 'app-list-fournisseur',
  templateUrl: './list-fournisseur.component.html',
  styleUrls: ['./list-fournisseur.component.css']
})

export class ListFournisseurComponent implements OnInit {

  SearchVal: string = '';
  list: Fournisseur[];
  fournisseur: Fournisseur = new Fournisseur();
  constructor(private ps:FournisseurService,private router : Router, private modalService: NgbModal ,private dp : DetailFournisseurService) { }

  ngOnInit(): void {
    this.getAllFournisseur();
  }
  
  getAllFournisseur() {
    this.ps.getFournisseurList().subscribe(
      (res) => {
        console.log(res);
        this.list = res;
      }
    );
  }
  deleteFournisseur(i: number) {
    this.ps.deleteFournisseur(i).subscribe((res) => {
      console.log(res);
      this.getAllFournisseur();
    });
  }
  updateFournisseur(id: number) {
    console.log(id);
    this.router.navigate(['fournisseur/edit-Fournisseur',id]);
  }

  open(id: number) {
    const modalRef = this.modalService.open(AddDetailFournisseurComponent);
    modalRef.componentInstance.IdDetailFournisseur = id ;
 
}
deleteDetailFournisseur(j: number,i:number) {
  this.list.splice(i, 1);
  this.dp.deleteDetailFournisseur(j).subscribe();
}



Search() {
  if (this.SearchVal === '') {
    this.getAllFournisseur();
  } else {
    this.ps.Search(this.SearchVal).subscribe((res) => {
      this.list = res;
    });
  }
}
triASC(){
  this.ps.TriFournisseurASC().subscribe((res)=> {
    this.list =res;
  });
}
triDESC(){
  this.ps.TriFournisseurDESC().subscribe((res)=> {
    this.list =res;
  });
}

}

