import { Component, EventEmitter, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Stock } from 'src/app/Models/stock';
import { StockService } from 'src/app/Services/stock.service';

@Component({
  selector: 'app-list-stocks',
  templateUrl: './list-stocks.component.html',
  styleUrls: ['./list-stocks.component.css']
})
export class ListStocksComponent implements OnInit {

  stocksList: Array<Stock> = [];
  errorMessage: string = "";
  closeResult: string;
  searchObject: any;
  p:number = 1;

  stock: Stock = new Stock();
  save = new EventEmitter<any>();

  constructor(private stockService: StockService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.stockService.getAllStock().subscribe(data => {
      this.stocksList = data;
    });
  }

  deleteStock(item: Stock, id: number) {
    this.stockService.deleteStock(item).subscribe(data => {
      this.stocksList.splice(id, 1);
      this.ngOnInit();
    }, err => {
      this.errorMessage = 'Unexpected error occured';
      console.log(err);
    })
  }

  saveStock() {
    this.stockService.addStock(this.stock).subscribe(data => {
      this.save.emit(data);
      this.ngOnInit();
    }, err => {
      this.errorMessage = 'Unexpected error occurred.';
      console.log(err);
    })
  }

  editStock() {
    this.stockService.editStock(this.stock).subscribe(data => {
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
  
  openedit(content, item:Stock) {
    this.stock = Object.assign({}, item);
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
      this.stocksList = this.stocksList.filter(res =>{
        return res.libelleStock.toLocaleLowerCase().match(this.searchObject.toLocaleLowerCase())
      })
    }
  }

  key:string = 'id';
  reverse: boolean = true;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  decrementStock(i: number){
    if(this.stocksList[i].qteStock > 0)
      this.stocksList[i].qteStock--
    else
      this.stocksList[i].qteStock=0
  }

  statusStock(i: number){
    if(this.stocksList[i].qteStock <= this.stocksList[i].qteMin){
      return "warning";
    }else{
      return "success";
    }
  }

}
