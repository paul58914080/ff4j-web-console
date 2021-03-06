import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  baseUrl: string;

  constructor() {
    this.baseUrl = environment.apiBaseUrl ? environment.apiBaseUrl : '';
  }

  getBaseUrl(): string {
    return this.baseUrl;
  }
}
