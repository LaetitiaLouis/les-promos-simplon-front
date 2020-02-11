import { TestBed } from '@angular/core/testing';

import { AprennantService } from './aprennant.service';

describe('AprennantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AprennantService = TestBed.get(AprennantService);
    expect(service).toBeTruthy();
  });
});
