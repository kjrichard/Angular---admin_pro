import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutinModule } from './pages/pages.routing';
import { AuthRoutinModule } from './auth/auth.routing';

import { NopagefoundComponent } from './nopagefound/nopagefound.component';



const routes: Routes = [
 
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**',component: NopagefoundComponent },
]


@NgModule({

  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutinModule,
    AuthRoutinModule
    
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
