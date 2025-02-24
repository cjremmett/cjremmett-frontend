import { TestBed } from '@angular/core/testing';

import { PhotoUploadServiceService } from './photo-upload-service.service';

describe('PhotoUploadServiceService', () => {
  let service: PhotoUploadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoUploadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
