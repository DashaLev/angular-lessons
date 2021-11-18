import { TestBed } from '@angular/core/testing';

import { UserResolveService } from './user-resolve.service';

describe('UserResolve.ServiceService', () => {
  let service: UserResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
