import { NgModule } from "@angular/core";
import { OrderItemsComponent } from "./order-items/order-items.component";
import { DeliveryCostsComponent } from "./delivery-costs/delivery-costs.component";
import { OrderComponent } from "./order.component";
import { SharedModule } from "app/shared/shared.module";
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
  {path: '', component: OrderComponent}
]

@NgModule({
  declarations: [OrderComponent, OrderItemsComponent, DeliveryCostsComponent],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})

export class OrderModule{}
