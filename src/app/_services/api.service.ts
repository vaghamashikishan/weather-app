import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_KEY = 'iU3jZreoLRGnedbJdJAzOrI93IFgvbEx';
  private root_url = 'http://dataservice.accuweather.com';

  getDataByLocationName(searchTerm: string) {
    return this.http.get(`${this.root_url}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${searchTerm}`)
  }

  autoCompleteLocation(searchTerm: string) {
    // return this.http.get(`http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=iU3jZreoLRGnedbJdJAzOrI93IFgvbEx&q=d`)
    return this.http.get(`${this.root_url}/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${searchTerm}`)
  }

}
