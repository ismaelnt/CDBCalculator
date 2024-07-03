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
  private apiUrl = 'https://localhost:7240/api/CDB';

  constructor(private http: HttpClient) {}

  calculateCDB(request: CDBRequest): Observable<CDBResponse> {
    return this.http.post<CDBResponse>(`${this.apiUrl}/calculate`, request);
  }
}
