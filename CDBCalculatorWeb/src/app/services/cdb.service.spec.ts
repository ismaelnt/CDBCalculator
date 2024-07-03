import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { CdbService, CDBRequest, CDBResponse } from './cdb.service';

describe('CdbService', () => {
  let service: CdbService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CdbService, provideHttpClient(), provideHttpClientTesting()],
    });

    service = TestBed.inject(CdbService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return expected result when calculateCDB is called', () => {
    const mockRequest: CDBRequest = { initialValue: 1000, months: 12 };
    const mockResponse: CDBResponse = {
      grossValue: 1123.08,
      netValue: 1098.46,
    };

    service.calculateCDB(mockRequest).subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${service['apiUrl']}/calculate`);
    expect(req.request.method).toBe('POST');
    req.flush(mockResponse);
  });
});
