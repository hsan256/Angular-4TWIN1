import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Produit } from '../../Models/produit';
import { ProduitService } from '../../Services/produit.service';


@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css'],
})
export class ListProduitComponent implements OnInit {
  title = 'appBootstrap';
  
  closeResult: string;

  list: Produit[];
  produit: Produit = new Produit();
  productToShow: Produit = new Produit();
  constructor(private ps: ProduitService, private router: Router,private modalService: NgbModal) {}

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
    this.ps.deleteProduct(i).subscribe((res) => {
      console.log(res);
      this.getAllProducts();
    });
  }
  Modifier(id: number) {
    this.router.navigate(['/updateproduit',id]);
  }
  


  open(content,p:Produit) {
    this.productToShow=p;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
