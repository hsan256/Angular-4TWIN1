import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailProduit } from 'src/app/Models/detail-produit';
import { DetailProduitService } from 'src/app/Services/detail-produit.service';

@Component({
  selector: 'app-update-detail-produit',
  templateUrl: './update-detail-produit.component.html',
  styleUrls: ['./update-detail-produit.component.css']
})

export class UpdateDetailProduitComponent implements OnInit {

  detailProduit: DetailProduit = new DetailProduit();

  constructor(
    private ds: DetailProduitService,
    private router: Router,
    private ac: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ac.paramMap.subscribe(
      (next) =>
        this.ds.getDetailProductById(Number(next.get('id'))).subscribe((res) => {
          this.detailProduit = res;
        }),
      (error) => console.log(error)
    );

  }

  updateDetailProduit() {
    this.ds
      .updateDetailProduct(this.detailProduit.idDetailProduit, this.detailProduit)
      .subscribe((res) => {
        this.router.navigate(['/listproduit']);
      });
  }
}
