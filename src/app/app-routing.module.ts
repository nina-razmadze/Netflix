import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

import { LoginComponent } from './features/authentication/components/login/login.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    children: [{ path: 'login', component: LoginComponent }],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
