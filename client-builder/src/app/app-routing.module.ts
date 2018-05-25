import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AccountLoginComponent } from './components/account-login/account-login.component';

const routes : Routes = [
  {path:'',redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: AccountLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
