import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { TestComponent } from './Component/test/test.component';
import { BookDashboardComponent } from './Component/book-dashboard/book-dashboard.component';
import { BookDisplayComponent } from './Component/book-display/book-display.component';
import { CartComponent } from './Component/cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CustomerComponent } from './Component/customer/customer.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
   {path: 'register',component:RegisterComponent},
   {path: 'test',component:TestComponent},
   {path: 'login',component:LoginComponent},
   {path: 'dashboard',component:BookDashboardComponent,
    children:[
      { path: '',component:BookDisplayComponent},
      { path:'cart',component:CartComponent},
    ]},
    {path: '**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
