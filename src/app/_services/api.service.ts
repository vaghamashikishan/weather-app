import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_KEY = 'iU3jZreoLRGnedbJdJAzOrI93IFgvbEx';
  private root_url = 'http://dataservice.accuweather.com';

  getDataBySearch(searchTerm: string) {
    return this.http.get(`${this.root_url}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${searchTerm}`)
  }

  autoCompleteLocation(searchTerm: string) {
    console.log('hi');
    return this.http.get(`${this.root_url}/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${searchTerm}`)

  }


}
