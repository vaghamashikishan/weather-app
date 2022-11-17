import { AfterContentChecked, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  constructor(private _apiService: ApiService) { }

  ngOnInit() { }

  searchTerm: string = '';
  selectedLocation: any;

  getData() {
    this._apiService.getDataByLocationName(this.selectedLocation.LocalizedName).subscribe(res => console.log(res));
  }

  getFinalSearch(e: any) {
    this.selectedLocation = e;
    this.searchTerm = e.LocalizedName;
    console.log(e);
    console.log(this.searchTerm);
  }
}
