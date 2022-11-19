import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }
  @Output() locationFromSearchToTab = new EventEmitter<any>();

  ngOnInit() { }

  searchTerm: string = '';
  selectedLocation: any;

  getLocationFromDirective(searchedLocation: any) {
    this.selectedLocation = searchedLocation;
    this.searchTerm = searchedLocation.LocalizedName + ', ' + searchedLocation.AdministrativeArea.LocalizedName;
  }

  sendDataToWeatherReport() {
    if (!this.selectedLocation) {
      alert('Please select location from list');
      return;
    }
    this.locationFromSearchToTab.emit(this.selectedLocation);
    this.searchTerm = '';
  }
}
