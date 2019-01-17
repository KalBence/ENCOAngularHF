import { Pipe, PipeTransform } from '@angular/core';
import { TripListModel } from '../../vacation/models/trip-list.model';

@Pipe({
  name: 'TripFilter'
})
export class TripFilter implements PipeTransform {
  transform(trips: TripListModel[], args: any[]): any {
    if(args != null && args.length != 0)
      return trips.filter(trip => trip.name.toLowerCase().indexOf(args[0].toLowerCase()) !== -1);
    else 
      return trips;
  }
}