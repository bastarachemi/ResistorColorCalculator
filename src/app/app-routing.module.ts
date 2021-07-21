import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResistanceBandsComponent } from './resistance-bands/resistance-bands.component';


const routes: Routes = [
  { path: 'calculator', component: ResistanceBandsComponent },
  { path: '**', redirectTo: '/calculator' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
