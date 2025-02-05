import { TestBed } from '@angular/core/testing';

import { PhotoDataService } from './photodata.service';

describe('PhotodataService', () => {
  let service: PhotoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
