import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestApiService {
  private baseUrl = 'https://restcountries.eu/rest/v2/';
  constructor(private request:HttpClient) { }

  get(url:string, data?:any) {
    return this.request.get(this.baseUrl+url, { params: data });
  }

}
