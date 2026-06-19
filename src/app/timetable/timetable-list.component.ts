import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseListCtl } from '../base-list.component';

@Component({
  selector: 'app-timetable-list',
  templateUrl: './timetable-list.component.html',
  styleUrls: ['./timetable-list.component.css']
})
export class TimetableListComponent extends BaseListCtl{

   constructor(locator: ServiceLocatorService, route: ActivatedRoute) {
    super(locator.endpoints.TIMETABLE, locator, route);
  }

}
