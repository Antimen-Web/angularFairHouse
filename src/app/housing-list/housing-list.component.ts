import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent {
  @Input() locationList: HousingLocation[] = [];
  results: HousingLocation[] = [];

  @Output() selectedLocationEvent = new EventEmitter<HousingLocation>();
  searchHousingLocations(searchText: string) {
    this.selectedLocationEvent.emit();
    if (!searchText) return;

    this.results = this.locationList.filter((location) =>
      location.city.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  selectHousingLocation(location: HousingLocation) {
    this.results = [];
    this.selectedLocationEvent.emit(location);
  }
}
