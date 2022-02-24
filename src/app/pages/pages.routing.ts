import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraphicalComponent } from './graphical/graphical.component';

const routes: Routes = [
  { path: 'dashboard', 
    component : PagesComponent,
    children  : [
        
        { path: '', component: DashboardComponent },
        { path: 'progress', component: ProgressComponent },
        { path: 'graphical', component: GraphicalComponent },
    ] 
  },
 
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routes )
    
  ],
  exports: [ RouterModule ]
})
export class PagesRoutinModule { }
