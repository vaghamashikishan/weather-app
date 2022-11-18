import { Component, OnInit, Input, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit, AfterViewInit {

  constructor() {
  }
  @Input() locationFromParent: any;
  location: any;
  ngOnInit(): void {
    this.location = this.locationFromParent;
  }
  ngAfterViewInit(): void {

  }

}
