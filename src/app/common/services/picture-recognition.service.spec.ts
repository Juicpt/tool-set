import {TestBed} from '@angular/core/testing';

import {PictureRecognitionService} from './picture-recognition.service';

describe('PictureRecognitionService', () => {
  let service: PictureRecognitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PictureRecognitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
