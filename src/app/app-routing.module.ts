import { LoginComponent } from './login/login.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { ShoopingCardComponent } from './shooping-card/shooping-card.component';

const routes: Routes = [
  {path:"products",component : ProductsComponent},
  {path:"orders",component : MyOrdersComponent},
  {path:"admin/products",component : AdminProductsComponent},
  {path:"admin/orders",component : AdminOrdersComponent},
  {path:"shooping-card",component : ShoopingCardComponent},
  {path:"login",component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
