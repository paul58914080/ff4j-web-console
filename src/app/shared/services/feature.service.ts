import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';
import { Feature } from '../models/Feature';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor(private http: HttpClient, private baseService: BaseService) {}

  getFeatures(): Observable<Feature[]> {
    return this.http.get<Feature[]>(`${this.baseService.getBaseUrl()}/ff4j/store/features`);
  }
}
