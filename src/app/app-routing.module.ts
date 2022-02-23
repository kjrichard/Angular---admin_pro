import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { GraphicalComponent } from './pages/graphical/graphical.component';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages/pages.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Routes = [
  { path: '', 
  component : PagesComponent,
  children  : [
    
    { path: 'dashboard', component: DashboardComponent },
    { path: 'progress', component: ProgressComponent },
    { path: 'graphical', component: GraphicalComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  ] 
  },
 

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
 
  
  { path: '**',component: NopagefoundComponent },
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
