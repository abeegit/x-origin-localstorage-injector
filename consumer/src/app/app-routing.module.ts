import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SapAribaComponent } from './sap-ariba/sap-ariba.component';

const routes: Routes = [
  { path: 'sap-ariba', component: SapAribaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
