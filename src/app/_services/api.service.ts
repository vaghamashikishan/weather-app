import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_KEY = 'dWWMnAn8sBg7CF3GvfwPGkfgIK0rjEon';
  private root_url = 'http://dataservice.accuweather.com';

  getDataBySearch(searchTerm: string) {
    return this.http.get(`${this.root_url}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${searchTerm}`)
  }


}
