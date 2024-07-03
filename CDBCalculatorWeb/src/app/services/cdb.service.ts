import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface CDBRequest {
  initialValue: number;
  months: number;
}

export interface CDBResponse {
  grossValue: number;
  netValue: number;
}

@Injectable({
  providedIn: 'root',
})
export class CdbService {
  private apiUrl = 'http://localhost:5064/api/Cdb';

  constructor(private http: HttpClient) {}

  calculateCDB(request: CDBRequest): Observable<CDBResponse> {
    return this.http.post<CDBResponse>(`${this.apiUrl}/calculate`, request);
  }
}
