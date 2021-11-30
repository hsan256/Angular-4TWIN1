import { Component, OnInit, ViewChild } from '@angular/core';
import { Rayon } from 'src/app/Models/rayon';
import { RayonService } from 'src/app/Services/rayon.service';
import { AddRayonComponent } from '../add-rayon/add-rayon.component';

@Component({
  selector: 'app-list-rayons',
  templateUrl: './list-rayons.component.html',
  styleUrls: ['./list-rayons.component.css']
})
export class ListRayonsComponent implements OnInit {

  rayonsList: Array<Rayon> = [];
  
  @ViewChild(AddRayonComponent) child: AddRayonComponent | undefined;

  constructor(private rayonService: RayonService) { }

  ngOnInit(): void {
    this.rayonService.getAllRayon().subscribe(data => {
      this.rayonsList = data;
    });
  }

  createRayonRequest(){
    this.child?.showRayonModal();
  }

}
