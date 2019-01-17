import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TripsModule } from './vacation/trips.module';
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', loadChildren: () => CoreModule },
  { path: 'trips', loadChildren: () => TripsModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
