import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { DetailProduit } from 'src/app/Models/detail-produit';
import { Produit } from 'src/app/Models/produit';
import { Stock } from 'src/app/Models/stock';
import { Rayon } from 'src/app/Models/rayon';
import { ProduitService } from 'src/app/Services/produit.service';
import { DetailProduitService } from 'src/app/Services/detail-produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})


export class AddProduitComponent implements OnInit {
  title = 'appBootstrap';
  myForm: FormGroup;
  myForm2: FormGroup;

  closeResult: string;
  listDetailProduit: DetailProduit[];
  list: Produit[];
  listRayon: Rayon[];
  listStock: Stock[];
  product: Produit = new Produit();
  detailproduct: DetailProduit = new DetailProduit();

  constructor(
    private ps: ProduitService,
    private ds: DetailProduitService,
    private router: Router,
    private modalService: NgbModal,
    private services: NotificationsService
  ) {}

  ngOnInit(): void {
    this.getAllRayons();
    this.getAllStocks();
    this.myForm = new FormGroup({
      code: new FormControl(this.product.codeProduit, [
        Validators.required,
        Validators.pattern('[a-zA-Z0-9]*'),
      ]),
      libelle: new FormControl(this.product.libelleProduit, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]),
      prixUnitaire: new FormControl(this.product.prixUnitaire, [
        Validators.required,
        Validators.pattern('[0-9]*'),
      ]),
      rayon: new FormControl(this.product.rayon, [Validators.required]),
      stock: new FormControl(this.product.stock, [Validators.required]),
    });
    this.myForm2 = new FormGroup({
      dateCeation: new FormControl(this.detailproduct.datecreation, [
        Validators.required,
      ]),
      dateDernierModification: new FormControl(
        this.detailproduct.dateDernierModification,
        [Validators.required]
      ),
      categorieProduit: new FormControl(
        this.detailproduct.categorieProduit,
        Validators.required
      ),
    });
  }
  save() {
    this.ps.addProduct(this.product).subscribe((res) => {
      console.log('Product created!');
      this.product = res;
      this.onSucces('Product Created successfully');
    });
  }

  getAllRayons() {
    this.ps.getAllRayonsFormDb().subscribe((res) => {
      console.log(res);
      this.listRayon = res;
    });
  }
  getAllStocks() {
    this.ps.getAllStocksFormDb().subscribe((res) => {
      console.log(res);
      this.listStock = res;
    });
  }

  open(content) {
    console.log(this.product);
    this.save();
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  saveDetailProduit() {
    this.detailproduct.produit = this.product;
    console.log(this.detailproduct);
    this.ds.addDetailProduct(this.detailproduct).subscribe((res) => {
      console.log('Product created!');
      //this.onSucces('DetailProduct Created successfully');
      this.detailproduct = res;
      this.router.navigate(['/listproduit']);
    });
  }
  onSucces(message) {
    this.services.success('success', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      Animation: 'fade',
      showProgressBar: true,
    });
    

  }
  onError(message) {
    this.services.error('Error', message, {
      position: ['bottom', 'right'],
      timeOut: 2000,
      Animation: 'fade',
      showProgressBar: true,
    });
  }
}
