import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  list: Produit[];
  product: Produit = new Produit();
  constructor(private ps: ProduitService, private router: Router) {}

  ngOnInit(): void {
  }
  save() {
    this.product;
    this.ps.addProduct(this.product).subscribe((res) => {
      console.log('Product created!');
      
    });
  }
}
