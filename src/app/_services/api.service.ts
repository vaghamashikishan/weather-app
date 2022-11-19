import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private API_KEY = 'A0xx2gzXRF71G4zhgfcwh1tfUkqmczgp';
  private root_url = 'http://dataservice.accuweather.com';

  getAutocompleteLocationList(searchTerm: string) {
    return this.http.get(`${this.root_url}/locations/v1/cities/autocomplete?apikey=${this.API_KEY}&q=${searchTerm}`)
  }

  getLocationDataByLocationKey(locationKey: number) {
    return this.http.get(`${this.root_url}/locations/v1/${locationKey}?apikey=${this.API_KEY}`)
  }

  getWeatherConditionDataByLocationKey(locationKey: number) {
    return this.http.get(`${this.root_url}/currentconditions/v1/${locationKey}?apikey=${this.API_KEY}`)
  }

  // getDataByLocationName(searchTerm: string) {
  //   return this.http.get(`${this.root_url}/locations/v1/cities/search?apikey=${this.API_KEY}&q=${searchTerm}`)
  // }
}
