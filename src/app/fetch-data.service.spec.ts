import { TestBed, inject } from '@angular/core/testing';

import { FetchDataService } from './fetch-data.service';
import { HttpClient, HttpHeaders, HttpHandler } from '@angular/common/http';

describe('FetchDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FetchDataService,
        HttpClient,
        HttpHandler
      ]
    });
  });

  it('should be created', inject([FetchDataService], (service: FetchDataService) => {
    expect(service).toBeTruthy();
  }));
});
