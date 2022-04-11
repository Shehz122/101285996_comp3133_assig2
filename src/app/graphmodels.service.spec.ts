import { TestBed } from '@angular/core/testing';

import { GraphmodelService } from './graphmodels.service';

describe('GraphqlapiService', () => {
  let service: GraphmodelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphmodelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});