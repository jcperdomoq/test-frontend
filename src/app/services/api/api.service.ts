import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = environment.api;
  constructor(
    private http:HttpClient
  ) { }

  get(id, endpoint) {
    return this.http.get(`${this.url}/${endpoint}/${ id }`)
  }

}
