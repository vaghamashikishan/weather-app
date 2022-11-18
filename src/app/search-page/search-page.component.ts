import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor() { }
  @Output() locationForNewTab = new EventEmitter<any>();

  ngOnInit() { }

  searchTerm: string = '';
  selectedLocation: any;

  getLocationFromDirective(e: any) {
    this.selectedLocation = e;
    this.searchTerm = e.LocalizedName;
  }

  sendDataToWeatherReport() {
    this.locationForNewTab.emit(this.selectedLocation ? this.selectedLocation : this.searchTerm);
    this.searchTerm = '';
    // if (this.selectedLocation) {
    //   this._apiService.getDataByLocationKey(this.selectedLocation.Key).subscribe(res => console.log(res));
    //   this.selectedLocation = null;
    // } else {
    //   this._apiService.getDataByLocationName(this.selectedLocation.LocalizedName).subscribe(res => console.log(res));
    // }
  }

}
