import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sub } from './sub';
import { from, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubsService {

  constructor(
    private http: HttpClient
  ) { }

  getSub(): Observable<Sub[]> {
    return this.http.post<Sub[]>(`api/list`,{});
  }

}