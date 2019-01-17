import { Day } from "./day-details.model";

export interface TripDetailsModel {
    id: number;
    name: string;
    image: string;
    from: Date;
    to: Date;
    description: string;
    days: Day[];
  }