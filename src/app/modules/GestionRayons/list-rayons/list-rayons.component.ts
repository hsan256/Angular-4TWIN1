import { Component, EventEmitter, OnInit, ViewChild } from '@angular/core';
import { Rayon } from 'src/app/Models/rayon';
import { RayonService } from 'src/app/Services/rayon.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-rayons',
  templateUrl: './list-rayons.component.html',
  styleUrls: ['./list-rayons.component.css']
})

export class ListRayonsComponent implements OnInit {

  rayonsList: Array<Rayon> = [];
  errorMessage: string = "";
  closeResult: string;
  searchObject: any;
  p:number = 1;

  rayon: Rayon = new Rayon();
  save = new EventEmitter<any>();

  constructor(private rayonService: RayonService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.rayonService.getAllRayon().subscribe(data => {
      this.rayonsList = data;
    });
  }

  deleteRayon(item: Rayon, id: number) {
    this.rayonService.deleteRayon(item).subscribe(data => {
      this.rayonsList.splice(id, 1);
      this.ngOnInit();
    }, err => {
      this.errorMessage = 'Unexpected error occured';
      console.log(err);
    })
  }

  saveRayon() {
    this.rayonService.addRayon(this.rayon).subscribe(data => {
      this.save.emit(data);
      this.ngOnInit();
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  editRayon() {
    this.rayonService.editRayon(this.rayon).subscribe(data => {
      this.ngOnInit();
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  openedit(content, item:Rayon) {
    this.rayon = Object.assign({}, item);
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
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
      return `with: ${reason}`;
    }
  }

  Search(){
    if(this.searchObject == ""){
      this.ngOnInit()
    }else{
      this.rayonsList = this.rayonsList.filter(res =>{
        return res.libelleRayon.toLocaleLowerCase().match(this.searchObject.toLocaleLowerCase())
      })
    }
  }

  key:string = 'id';
  reverse: boolean = true;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  printReportexcel(): void{
    let dataType = 'application/vnd.ms-excel.sheet.macroEnabled.12';
    let tableSelect = document.getElementById('rayons');
    let tableHtml = tableSelect.outerHTML.replace(/ /g, '%20');
    let downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);
    downloadLink.href = 'data:' + dataType + ', ' + tableHtml;
    downloadLink.download = 'rayons-report.xls';
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }

  printReportPdf(){
    window.print();
  }
}
