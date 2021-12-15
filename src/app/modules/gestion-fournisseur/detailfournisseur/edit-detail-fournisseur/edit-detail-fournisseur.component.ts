import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailFournisseur } from 'src/app/Models/detail-fournisseur';
import { Fournisseur } from 'src/app/Models/fournisseur';
import { DetailFournisseurService } from 'src/app/Services/detail-fournisseur.service';
import { FournisseurService } from 'src/app/Services/fournisseur.service';

@Component({
  selector: 'app-edit-detail-fournisseur',
  templateUrl: './edit-detail-fournisseur.component.html',
  styleUrls: ['./edit-detail-fournisseur.component.css']
})

export class EditDetailFournisseurComponent implements OnInit {
  @Input() IdDetailFournisseur ;
  listdp : DetailFournisseur [] ;
  DetailFournisseur : DetailFournisseur;  
  list : Fournisseur [];

  constructor(private ps:DetailFournisseurService ,private xz: FournisseurService , private routers : Router ,private ac : ActivatedRoute,public activeModal: NgbActiveModal) { }
  
  submitted = false; 
  ngOnInit(): void {
   
      this.getDetailFournisseurById();
      this.getAllFournisseur();
    }  
  save3() {  
    this.ps.updateDetailFournisseur(this.DetailFournisseur)  
      .subscribe(data => {
        console.log(data)    
        window.alert("Detail acec ID  "+ this.DetailFournisseur.idDetailFournisseur +"  est bien Modifier")
      },error => console.log(error)
      );  
    
    
  }  
  
  getDetailFournisseurById()
  {this.ps.getDetailFournisseurById(this.IdDetailFournisseur).subscribe(
    (res) => {
      console.log(res);
      this.DetailFournisseur = res;
    }
  );

  }
  getAllFournisseur() {
    this.xz.getFournisseurList().subscribe(
      (res) => {
        console.log(res);
        this.list = res;
      }
    );
  }

}
