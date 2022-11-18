import { Directive, Input, HostListener, ElementRef, Renderer2, OnDestroy, EventEmitter, Output } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { ApiService } from '../_services/api.service';
@Directive({
  selector: '[appAutoComplete]'
})
export class AutoCompleteDirective implements OnDestroy {
  constructor(private _el: ElementRef, private _renderer: Renderer2, private _apiService: ApiService) { console.log(_el); }

  @Input() searchTerm: any;
  @Output() finalSearchOutput = new EventEmitter<any>();
  finalSearch: string = '';

  locationData: any[] = [];
  Subscription1!: Subscription;
  @HostListener('keyup') kishan() {
    if (this.searchTerm) {
      this.getAutoSuggestions();
    } else {
      const rootEl = this._renderer.selectRootElement('.drop-down', false);
    }
  }

  getAutoSuggestions() {
    this.Subscription1 = this._apiService.autoCompleteLocation(this.searchTerm).subscribe((res: any) => {
      this.locationData = res
      this.createDropDown();
    });
  }

  createDropDown() {
    const rootEl = this._renderer.selectRootElement('.drop-down', false);
    this.locationData.forEach((city: any) => {
      let option = this._renderer.createElement('div');
      this._renderer.addClass(option, 'option');
      let optionText = this._renderer.createText(city.LocalizedName + ', ' + city.AdministrativeArea.LocalizedName);
      this._renderer.listen(option, 'click', () => {
        this.finalSearchOutput.emit(city);
        this._renderer.selectRootElement('.drop-down', false);
      })
      this._renderer.appendChild(option, optionText);
      this._renderer.appendChild(rootEl, option);
    })
  }

  ngOnDestroy(): void {
    if (this.Subscription1) this.Subscription1.unsubscribe();
  }
}
