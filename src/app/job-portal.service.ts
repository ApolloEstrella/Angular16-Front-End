// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MemberObj } from "../app/models/member";

@Injectable({
  providedIn: 'root',
})
export class JobPortalService {
  private apiUrl = 'https://localhost:7129/JobPortal';

  constructor(private http: HttpClient) { }

  addRow(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  deleteRow(id: any): Observable<any> {
    return this.http.delete(this.apiUrl + '?id=' + id);
  }

  getRows(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // Get a specific row by ID
  getRowById(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    var x = this.http.get<any>(url);
    return this.http.get<any>(url);
  }

  // Send the object to the Web API
  sendMemberObj(member: MemberObj) {
    return this.http.put(this.apiUrl, member);
  }

  updateRow(data: any): Observable<any> {
    return this.http.put(this.apiUrl, data);
  }

}
