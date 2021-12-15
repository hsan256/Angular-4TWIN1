import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailFournisseur } from 'src/app/Models/detail-fournisseur';
import { DetailFournisseurService } from 'src/app/Services/detail-fournisseur.service';
import { EditDetailFournisseurComponent } from '../edit-detail-fournisseur/edit-detail-fournisseur.component';

@Component({
  selector: 'app-add-detail-fournisseur',
  templateUrl: './add-detail-fournisseur.component.html',
  styleUrls: ['./add-detail-fournisseur.component.css']
})
export class AddDetailFournisseurComponent implements OnInit {
  @Input() IdDetailFournisseur ;
  list : DetailFournisseur [] ;
  DetailFournisseur : DetailFournisseur;  
    paramater : number ;
  
  constructor(private ps:DetailFournisseurService  ,public activeModal1: NgbActiveModal, private modalService: NgbModal ) { }
  
  submitted = false; 
  ngOnInit(): void {
        this.getDetailFournisseurById();
    }  
  
  
  getDetailFournisseurById()
  {this.ps.getDetailFournisseurById(this.IdDetailFournisseur).subscribe(
    (res) => {
      console.log(res);
      this.DetailFournisseur = res;
    }
  );

  }
  open(id: number) {
    const modalRef = this.modalService.open(EditDetailFournisseurComponent);
    modalRef.componentInstance.IdDetailFournisseur = id ;
}
}
