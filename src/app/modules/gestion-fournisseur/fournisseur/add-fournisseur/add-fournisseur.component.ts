import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailFournisseur } from 'src/app/Models/detail-fournisseur';
import { Fournisseur } from 'src/app/Models/fournisseur';
import { DetailFournisseurService } from 'src/app/Services/detail-fournisseur.service';
import { FournisseurService } from 'src/app/Services/fournisseur.service';

@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})

export class AddFournisseurComponent implements OnInit {
  // constructor(private FournisseurService:FournisseurService) { }
  // Fournisseur : Fournisseur=new Fournisseur();  
  // submitted = false; 
  // ngOnInit(): void {
  //   this.submitted=false;  
  // }
  // Fournisseursaveform=new FormGroup({  
     
  //   libelle_Fournisseur:new FormControl('',[Validators.required]),  
  //   code_Fournisseur:new FormControl()  
  // });  
  
  // saveFournisseur(saveFournisseur){  
  //   this.Fournisseur=new Fournisseur();     
  //   this.Fournisseur.libelleFornisseur=this.Fournisseurlibelle.value;  
  //   this.Fournisseur.codeFornisseur=this.Fournisseurcode.value;  
      
  //   this.submitted = true;  
  //   this.save();  
  // }  
  
    
  
  // save() {  
  //   this.FournisseurService.createFournisseur(this.Fournisseur)  
  //     .subscribe(data => console.log(data), error => console.log(error));  
  //   this.Fournisseur = new Fournisseur();  
  // }  
  
  // get Fournisseurlibelle(){  
  //   return this.Fournisseursaveform.get('libelle_Fournisseur');  
  // }  
  
  // get Fournisseurcode(){  
  //   return this.Fournisseursaveform.get('code_Fournisseur');  
  // }  
  
  
  
  // addFournisseurtForm(){  
  //   this.submitted=false;  
  //   this.Fournisseursaveform.reset();  
  // }  
  
  fournisseur : Fournisseur = new Fournisseur() ;  
list:Fournisseur[];

listDet : DetailFournisseur[];

constructor(private ps:FournisseurService , private router: Router, private dp : DetailFournisseurService , private modalService: NgbModal) { }

  ngOnInit(): void {
 
   this.fournisseur.detailfournisseur = new DetailFournisseur();
   
    this.getDetailFournisseurList();
  }
  
  saveFournisseur(){  
    console.log(this.fournisseur.detailfournisseur);
    this.fournisseur;
   
    console.log(this.fournisseur)  
    this.dp.createDetailFournisseur(this.fournisseur.detailfournisseur) 
    this.ps.createFournisseur(this.fournisseur).subscribe(
      data => {
        console.log(data)    
        this.router.navigate(['fournisseur/view-Fournisseur']);
      },error => console.log(error)
  
      );  
    

  }  
 
 
  getDetailFournisseurList()
  {
    this.dp.getAllDetailFournisseur().subscribe(
      data => {
        this.listDet = data ;
        console.log(this.listDet);
      }
    );

  }
}
