import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripFilter } from './pipes/trip-filter.pipe';

@NgModule({
  declarations: [
    TripFilter
  ],
  imports: [
  ],
  exports: [
    CommonModule,
    TripFilter
  ]
})
export class SharedModule { }