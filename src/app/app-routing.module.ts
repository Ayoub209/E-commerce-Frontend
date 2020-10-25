import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { ProduitComponent } from './produit/produit.component';


const routes: Routes = [
  {path:'products/:p1/:p2',component:ProduitComponent},
  {path:'',redirectTo:'products/1/0',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'product-details/:url',component:DetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
