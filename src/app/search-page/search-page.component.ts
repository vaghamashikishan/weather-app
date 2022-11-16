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

  getData() {
    // this._apiService.getDataBySearch(this.searchTerm).subscribe(res => console.log(res));
  }

  getSuggestions() {
    console.log(this.searchTerm);
    // this._apiService.autoCompleteLocation(this.searchTerm).pipe(
    //   map((res: any) => {
    //     let cityArray = [];
    //     for (let i = 0; i < res.length; i++) {
    //       cityArray.push(res[i]);
    //     }
    //   })
    // ).subscribe(res => console.log(res));
  }
}
