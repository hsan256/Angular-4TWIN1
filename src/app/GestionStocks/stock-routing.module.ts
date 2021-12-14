import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListStocksComponent } from "./list-stocks/list-stocks.component";
import { StatisticsComponent } from "./statistics/statistics.component";


const routes: Routes = [
    { path: "", component: ListStocksComponent },
    { path: "stocks/statistics", component: StatisticsComponent },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class StockRoutingModule {}