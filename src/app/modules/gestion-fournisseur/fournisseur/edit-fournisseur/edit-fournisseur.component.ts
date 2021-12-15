import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Fournisseur } from 'src/app/Models/fournisseur';
import { FournisseurService } from 'src/app/Services/fournisseur.service';

@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})


export class EditFournisseurComponent implements OnInit {
  listFournisseur : Fournisseur[];
  
  fournisseur:Fournisseur ; 
  paramater : number ;
  constructor(private ps :FournisseurService,private router :Router, private ac : ActivatedRoute) { }

  ngOnInit(): void {
    
   this.ac.params.subscribe(params=>
    {
      this.paramater=params['id'];
    })
    console.log("edit"+this.paramater)
    this.getFournisseurById();

  }


  getFournisseurById()
  {this.ps.getFournisseur(this.paramater).subscribe(
    (res) => {
      console.log(res);
      this.fournisseur = res;
    }
  );

  }
  save2(){
    console.log(this.fournisseur);
    this.ps.updateFournisseur(this.fournisseur).subscribe(

      res=>{
        this.router.navigate(['fournisseur/view-Fournisseur']);
      }
    );
  }
}
