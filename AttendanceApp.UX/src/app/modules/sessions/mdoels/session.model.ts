import { LocationModel } from '../../locations/models/location.model';

export class SessionModel {
  id: number;
  sessionDate: Date;
  location: LocationModel;
}
