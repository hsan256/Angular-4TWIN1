import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { Rayon } from 'src/app/Models/rayon';
import { Stock } from 'src/app/Models/stock';
import { ProduitService } from 'src/app/Services/produit.service';

@Component({
  selector: 'app-update-produit',
  templateUrl: './update-produit.component.html',
  styleUrls: ['./update-produit.component.css']
})
export class UpdateProduitComponent implements OnInit {
  listRayon: Rayon[];
  listStock: Stock[];
  product:Produit=new Produit();

  constructor(private ps :ProduitService,private router :Router, private ac : ActivatedRoute) { }

  ngOnInit(): void {
    this.getAllRayons();
    this.getAllStocks();
  }
  getAllRayons() {
    this.ps.getAllRayonsFormDb().subscribe(
      (res) => {
        console.log(res);
        this.listRayon = res;
      }
    );
  }
  getAllStocks() {
    this.ps.getAllStocksFormDb().subscribe(
      (res) => {
        console.log(res);
        this.listStock = res;
      }
    );
  }
  save(){
    console.log(this.product);
    this.ps.updateProduct(this.product).subscribe(

      res=>{
        this.router.navigate(['/listproduit']);
      }
    );
  }
}
