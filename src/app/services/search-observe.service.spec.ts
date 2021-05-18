import { TestBed } from '@angular/core/testing';

import { SearchObserveService } from './search-observe.service';

describe('SearchObserveService', () => {
  let service: SearchObserveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchObserveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
