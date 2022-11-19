import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab-container',
  templateUrl: './tab-container.component.html',
  styleUrls: ['./tab-container.component.scss']
})
export class TabContainerComponent implements OnInit {
  locationTabs: any[] = [];
  selected = new FormControl(0);

  ngOnInit(): void { }

  removeTab(index: number) {
    this.locationTabs.splice(index, 1);
  }

  getLocationDataFromSearchPage(e: any) {
    this.locationTabs.push(e);
    console.log(this.locationTabs);
    this.selected.setValue(this.locationTabs.length);
  }
}
