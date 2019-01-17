import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripListPageComponent } from './pages/trip-list.page.component';
import { TripDetailsPageComponent } from './pages/trip-details.page.component';

const routes: Routes = [
  { path: '', component: TripListPageComponent },
  { path: ':id', component: TripDetailsPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TripsRoutingModule { }
