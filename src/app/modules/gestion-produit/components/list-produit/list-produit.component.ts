import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotificationsService } from 'angular2-notifications';
import { DetailProduit } from 'src/app/Models/detail-produit';
import { Produit } from 'src/app/Models/produit';
import { DetailProduitService } from 'src/app/Services/detail-produit.service';
import { ProduitService } from 'src/app/Services/produit.service';
@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})


export class ListProduitComponent implements OnInit {
  title = 'appBootstrap';

  closeResult: string;
  SearchVal: string = '';

  list: Produit[];
  listDetailProduit: DetailProduit[];

  produit: Produit = new Produit();
  detailproduct: DetailProduit = new DetailProduit();

  productToShow: Produit = new Produit();
  constructor(
    private ps: ProduitService,
    private ds: DetailProduitService,
    private router: Router,
    private modalService: NgbModal,
    private services: NotificationsService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.ps.getAllProductsFormDb().subscribe((res) => {
      console.log(res);
      this.list = res;
    });
  }
  deleteProduct(i: number) {
    this.ds.getDetailProductByIdProduit(i).subscribe((res) => {
      console.log(res);
      this.detailproduct = res;

      this.ds
        .deleteDetailProduct(this.detailproduct.idDetailProduit)
        .subscribe((res) => {
          console.log(res);
          this.ps.deleteProduct(i).subscribe((res) => {
            console.log(res);
            this.getAllProducts();
            this.router.navigate(['/listproduit']);
          });
        });
    });
  }
  Modifier(id: number) {
    this.router.navigate(['/updateproduit', id]);
  }
  getDetailProductByidProduit(id: number) {
    this.ds.getDetailProductByIdProduit(id).subscribe((res) => {
      console.log(res);
      this.detailproduct = res;
    });
  }
  ModifierDetailProduit(id: number) {
    this.router.navigate(['/updatedetailproduit', id]);
  }

  
  deleteDetailProduct(i: number) {
    this.onSucces('Product Deleted successfully');

    this.ds.deleteDetailProduct(i).subscribe((res) => {
      console.log(res);
    });
  }

  Search() {
    if (this.SearchVal === '') {
      this.getAllProducts();
    } else {
      this.ps.SearchProductByName(this.SearchVal).subscribe((res) => {
        this.list = res;
      });
    }
  }
  triASC(){
    this.ps.TriProduitASC().subscribe((res)=> {
      this.list =res;
    });
  }
  triDESC(){
    this.ps.TriProduitDESC().subscribe((res)=> {
      this.list =res;
    });
  }
  open(content, p: Produit) {
    this.detailproduct = new DetailProduit();
    this.getDetailProductByidProduit(p.idProduit);
    this.productToShow = p;
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

