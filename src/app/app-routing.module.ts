import { NgModule } from '@angular/core';
import { RouterModule, Routes,ActivatedRoute } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductdetailComponent } from './pages/productdetail/productdetail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductlistComponent},
  {path:'products/:id',component:ProductdetailComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
