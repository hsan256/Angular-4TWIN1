import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../Models/produit';
import { ProduitService } from '../../Services/produit.service';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})
export class ListProduitComponent implements OnInit {
  list: Produit[];
  produit: Produit = new Produit();
  constructor(private ps:ProduitService,private router : Router) { }

  ngOnInit(): void {
    this.getAllProducts();
  }
  
  getAllProducts() {
    this.ps.getAllProductsFormDb().subscribe(
      (res) => {
        console.log(res);
        this.list = res;
      }
    );
  }
  deleteProduct(i: number) {
    this.ps.deleteProduct(i).subscribe((res) => {
      console.log(res);
      this.getAllProducts();
    });
  }
  Modifier(id: number) {
    this.router.navigate(['/updateproduit']);
  }
  

}
