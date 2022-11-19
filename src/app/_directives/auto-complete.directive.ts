import { Directive, Input, ElementRef, Renderer2, OnDestroy, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map, Subscription } from 'rxjs';
import { ApiService } from '../_services/api.service';
@Directive({
  selector: '[appAutoComplete]'
})

export class AutoCompleteDirective implements OnDestroy, AfterViewInit {
  constructor(private _el: ElementRef, private _renderer: Renderer2, private _apiService: ApiService) { }

  @Input() searchTerm: any;
  @Output() finalSearchedLocation = new EventEmitter<any>();
  finalSearch: string = '';

  locationListData: any[] = [];
  Subscription1!: Subscription;

  ngAfterViewInit(): void {
    // keyup event will execute this 'el' observable
    const el = fromEvent(this._el.nativeElement, 'keyup');
    el.pipe(
      // map((event: any) => event.target.value),
      map(event => this.searchTerm),
      debounceTime(1000),
      distinctUntilChanged(),
    ).subscribe(() => {
      if (this.searchTerm) {
        this.getAutoSuggestions();
      }
    });
    // if search-term is empty then dropdown will be deleted from DOM
    if (!this.searchTerm) this._renderer.selectRootElement('.drop-down', false);
  }

  getAutoSuggestions() {
    this.Subscription1 = this._apiService.getAutocompleteLocationList(this.searchTerm).subscribe((res: any) => {
      this.locationListData = res;
      this.createDropDown();
    });
  }

  createDropDown() {
    const rootEl = this._renderer.selectRootElement('.drop-down', false);
    this.locationListData.forEach((city: any) => {
      let option = this._renderer.createElement('div');
      this._renderer.addClass(option, 'option');
      let optionText = this._renderer.createText(city.LocalizedName + ', ' + city.AdministrativeArea.LocalizedName);
      this._renderer.listen(option, 'click', () => {
        this.finalSearchedLocation.emit(city);
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
