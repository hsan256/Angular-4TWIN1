import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { Rayon } from 'src/app/Models/rayon';
import { Stock } from 'src/app/Models/stock';
import { ProduitService } from 'src/app/Services/produit.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  title = 'appBootstrap';
  
  closeResult: string;
  list: Produit[];
  listRayon: Rayon[];
  listStock: Stock[];
  product: Produit = new Produit();
  constructor(private ps: ProduitService, private router: Router,private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getAllRayons();
    this.getAllStocks();
  }
  save() {
    this.product;
    this.ps.addProduct(this.product).subscribe((res) => {
      console.log('Product created!');
      this.router.navigate(['/listproduit']);
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
