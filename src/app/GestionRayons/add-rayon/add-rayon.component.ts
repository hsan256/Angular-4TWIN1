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

  errorMessage: string = "";

  @Input() rayon: Rayon = new Rayon();
  @Output() save = new EventEmitter<any>();
  constructor(private rayonService: RayonService) { }

  saveRayon() {
    this.rayonService.addRayon(this.rayon).subscribe(data => {
      this.save.emit(data);
      $('#new-event').modal('hide');
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  showRayonModal() {
    $('#new-event').modal('show');
  }
}
