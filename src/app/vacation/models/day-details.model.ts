import { Activity } from "./activity.model";

export interface Day {
  id: number;
  date: Date;
  description: string;
  accommodationCost: number;
  accommodationAddress: string;
  activities?: Activity[];
}