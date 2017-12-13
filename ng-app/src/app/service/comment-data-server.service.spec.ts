import { TestBed, inject } from '@angular/core/testing';

import { CommentDataServerService } from './comment-data-server.service';

describe('CommentDataServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommentDataServerService]
    });
  });

  it('should be created', inject([CommentDataServerService], (service: CommentDataServerService) => {
    expect(service).toBeTruthy();
  }));
});
