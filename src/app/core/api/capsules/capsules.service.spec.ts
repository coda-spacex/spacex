import { TestBed, inject } from '@angular/core/testing';

import { CapsulesService } from './capsules.service';

describe('CapsulesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CapsulesService]
    });
  });

  it('should be created', inject([CapsulesService], (service: CapsulesService) => {
    expect(service).toBeTruthy();
  }));
});
