import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { RouterModule } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

import { LoginComponent } from './features/authentication/views/login/login.component';
import { RegisterComponent } from './features/authentication/views/signup/signup.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'home',
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
