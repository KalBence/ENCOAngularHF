import { Component, OnInit } from '@angular/core';
import { TripListModel } from '../models/trip-list.model';
import { TripsApiClientService } from '../clients/trips-api-client.service';
import { TripFilter } from '../../shared/pipes/trip-filter.pipe';


@Component({
  templateUrl: './trip-list.page.component.html'
})
export class TripListPageComponent implements OnInit {

  trips: TripListModel[];
  filter: string;

  constructor(private tripsApiClient: TripsApiClientService) { }

  ngOnInit() {
     this.tripsApiClient.getTrips().subscribe(res => this.trips = res);
  }
}