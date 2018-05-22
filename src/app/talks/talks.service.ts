import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Talk} from './talk';

@Injectable()
export class TalksService {

  constructor(private http: HttpClient) { }

  getTalks(): Observable<Talk[]> {
    return this.http.get<Talk[]>('http://localhost:8080/talks');
  }
}
