import { TestBed } from '@angular/core/testing';

import { PaginatorService } from './index';

describe('PaginatorService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [PaginatorService],
    })
  );

  it('should be created', () => {
    const service: PaginatorService = TestBed.inject(PaginatorService);
    expect(service).toBeTruthy();
  });
});
