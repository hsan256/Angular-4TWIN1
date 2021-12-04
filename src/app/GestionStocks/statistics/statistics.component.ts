import { Component, ElementRef, OnInit } from '@angular/core';
import { StockService } from 'src/app/Services/stock.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  myChart: any;
  constructor(private service: StockService, private elementRef: ElementRef) { 
  }

  ngOnInit(): void {
    this.service.getAllStock().subscribe((res) => {
      let idStocks = res.map(res => res.idStock)
      let qteStock = res.map(res => res.qteStock)
      let libelleStock = res.map(res => res.libelleStock)
      // console.log(temp)

      let ctx = this.elementRef.nativeElement.querySelector(`#myChart`);
      this.myChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: libelleStock,
          datasets: [{
            label: 'Stocks',
            data: qteStock,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
  }
}
