import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailFacture } from 'src/app/Models/detail-facture';
import { Produit } from 'src/app/Models/produit';
import { FactureService } from 'src/app/Services/facture.service';

@Component({
  selector: 'app-detail-facture',
  templateUrl: './detail-facture.component.html',
  styleUrls: ['./detail-facture.component.css']
})
export class DetailFactureComponent implements OnInit {
  
  @Input() detailFacture : DetailFacture;
  @Output() edited = new EventEmitter<DetailFacture>();
  myForm : FormGroup;
  constructor(private factureService : FactureService) { }
produits : Produit[];
  ngOnInit(): void {
    this.myForm=new FormGroup({
      product:new FormControl({"value":this.detailFacture.produit}),
      quantity:new FormControl(this.detailFacture.qte, [Validators.required, Validators.pattern("^[1-9]*"),Validators.min(1)]),
      discount: new FormControl(this.detailFacture.pourcentageRemise,[Validators.required,Validators.min(0)])
    })
    this.getProducts();
  }

  getProducts(){
    this.factureService.getProducts().subscribe(
      res => {
        console.log('Clients :');
        this.produits = res;
        console.log(this.produits);
      });
    err => {
      console.log(err);
    }
  }

  cancelDetailFacture(){

  }
  saveOrUpdateDetailFacture(){

  }
  calculerDetailFactureElements(){

  }
  edit(){
    console.log(this.detailFacture)
    console.log(this.myForm.getRawValue());
    this.edited.emit(this.myForm.getRawValue());
    this.myForm.reset();
  }

}

