import { Component, OnInit } from '@angular/core';
import { TripDetailsModel } from '../models/trip-details.model';
import { ActivatedRoute } from '@angular/router';
import { Day } from '../models/day-details.model';
import { TripsApiClientService } from '../clients/trips-api-client.service';


@Component({
  templateUrl: './trip-details.page.component.html'
})
export class TripDetailsPageComponent implements OnInit {

  trip: TripDetailsModel;

  constructor(
    private route: ActivatedRoute,
    private tripsApiClient: TripsApiClientService
  ) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.tripsApiClient
        .getTripDetails(id)
        .subscribe(res => this.trip = res);
  }
  
}