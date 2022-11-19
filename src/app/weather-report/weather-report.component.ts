import { Component, OnInit, Input, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../_services/api.service';

@Component({
  selector: 'app-weather-report',
  templateUrl: './weather-report.component.html',
  styleUrls: ['./weather-report.component.scss']
})
export class WeatherReportComponent implements OnInit, OnDestroy {

  constructor(private _apiService: ApiService) { }
  @Input() locationFromParent: any;
  location: any;
  locationData: [] = [];
  weatherData: [] = [];

  getLocationDataSubsription!: Subscription;
  getWeatherDataSubsription!: Subscription;

  ngOnInit(): void {
    this.location = this.locationFromParent;

    this.getLocationDataSubsription = this._apiService.getLocationDataByLocationKey(this.location.Key).subscribe((res: any) => this.locationData = res);

    this.getWeatherDataSubsription = this._apiService.getWeatherConditionDataByLocationKey(this.location.Key).subscribe((res: any) => {
      this.weatherData = res;
      console.log(this.weatherData);
    })
  }

  ngOnDestroy(): void {
    if (this.getLocationDataSubsription) this.getLocationDataSubsription.unsubscribe();
    if (this.getWeatherDataSubsription) this.getWeatherDataSubsription.unsubscribe();
  }
}
