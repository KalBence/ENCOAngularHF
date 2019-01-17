import { TestBed } from '@angular/core/testing';

import { TripsApiClientService } from './trips-api-client.service';

describe('TripsApiClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripsApiClientService = TestBed.get(TripsApiClientService);
    expect(service).toBeTruthy();
  });
});
