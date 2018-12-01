import { TestBed } from '@angular/core/testing';

import { PoseService } from './pose.service';

describe('PoseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PoseService = TestBed.get(PoseService);
    expect(service).toBeTruthy();
  });
});
