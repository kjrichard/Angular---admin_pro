import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressComponent } from './progress/progress.component';
import { GraphicalComponent } from './graphical/graphical.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
   
    ProgressComponent,
    GraphicalComponent,
    DashboardComponent,
    PagesComponent
  ],
  exports: [
    ProgressComponent,
    GraphicalComponent,
    DashboardComponent,
    PagesComponent

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
    
  ]
})
export class PagesModule { }
