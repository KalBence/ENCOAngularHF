import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TripsRoutingModule } from './trips-routing.module';
import { TripDetailsPageComponent } from './pages/trip-details.page.component';
import { TripListPageComponent } from './pages/trip-list.page.component';
import { CommonModule } from '@angular/common';
import { TripsApiClientService } from './clients/trips-api-client.service';
import { SharedModule } from '../shared/shared.module';
import { TripFilter } from '../shared/pipes/trip-filter.pipe';

@NgModule({
  declarations: [
    TripListPageComponent,
    TripDetailsPageComponent
  ],
  imports: [
    CommonModule,
    TripsRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
      TripsApiClientService
    ]
})
export class TripsModule { }
