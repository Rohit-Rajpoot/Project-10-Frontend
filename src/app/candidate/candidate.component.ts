import { Component } from '@angular/core';
import { ServiceLocatorService } from '../service-locator.service';
import { ActivatedRoute } from '@angular/router';
import { BaseCtl } from '../base.component';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css']
})
export class CandidateComponent extends BaseCtl {

   constructor(public locator: ServiceLocatorService, route: ActivatedRoute) {
        super(locator.endpoints.CANDIDATE, locator, route);
      }

}
