import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TripListModel } from '../models/trip-list.model';
import { TripDetailsModel } from '../models/trip-details.model';

const trips: TripListModel[] = [
  { id: 1, name: 'London', description: 'short trip', from: new Date(2019, 1 ,2), to: new Date(2019, 1 ,5), image:'kepbinary' },
  { id: 2, name: 'Paris', description: 'vacation', from: new Date(2019, 4 ,20), to: new Date(2019, 4 ,28), image:'kepbinary' }
];

const tripsDetails: TripDetailsModel[] = [
    { id: 1, name: 'London', description: 'short trip', from: new Date(2019, 1 ,2), to: new Date(2019, 1 ,4), image:'kepbinary', days: [
        { id: 11, date: new Date(2019, 1 ,2), description: 'travel', accommodationCost: 0, accommodationAddress: 'r str 2' },
        { id: 11, date: new Date(2019, 1 ,3), description: 'sightseeing', accommodationCost: 120, accommodationAddress: 'r str 2' },
        { id: 11, date: new Date(2019, 1 ,4), description: 'travel', accommodationCost: 0, accommodationAddress: 'r str 2' }
    ]},
    { id: 2, name: 'Paris', description: 'vacation', from: new Date(2019, 4 ,20), to: new Date(2019, 4 ,28), image:'kepbinary', days: [
        { id: 11, date: new Date(2019, 1 ,2), description: 'short trip', accommodationCost: 120, accommodationAddress: 'r str 2' }
    ]}
  ];

@Injectable()
export class TripsApiClientService {

  constructor() { }

  getTrips(): Observable<TripListModel[]> {
    return of(trips);
  }

  getTripDetails(id: number): Observable<TripDetailsModel> {
    return of(tripsDetails.find(x => x.id === id));
  }
}
