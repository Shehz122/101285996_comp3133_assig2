import { TestBed } from '@angular/core/testing';

import { GraphqlapiService } from './graphmodels.service';

describe('GraphqlapiService', () => {
  let service: GraphqlapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphqlapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});