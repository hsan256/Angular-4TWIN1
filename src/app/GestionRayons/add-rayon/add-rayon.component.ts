import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Rayon } from 'src/app/Models/rayon';
import { RayonService } from 'src/app/Services/rayon.service';

declare var $: any;

@Component({
  selector: 'app-add-rayon',
  templateUrl: './add-rayon.component.html',
  styleUrls: ['./add-rayon.component.css']
})
export class AddRayonComponent {

  @Input() rayon: Rayon = new Rayon();
  @Output() save = new EventEmitter<any>();
  errorMessage: string = "";

  constructor(private rayonService: RayonService) { }

  saveRayon() {
    this.rayonService.addRayon(this.rayon).subscribe(data => {
      this.save.emit(data);
      $('#rayonModal').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occured';
      console.log(err)
    })
  }

  showRayonModal() {
    $(document).ready(function(){
      $('#rayonModal').modal({show:true});
    });
  }

}
