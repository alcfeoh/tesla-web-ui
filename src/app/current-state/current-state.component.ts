import { Component, OnInit } from '@angular/core';
import {TeslaDataService} from '../tesla-data/tesla-data.service';
import {DriveState, VehicleInfo} from '../tesla-data/responses';

@Component({
  selector: 'app-current-state',
  templateUrl: './current-state.component.html',
  styleUrls: ['./current-state.component.css']
})
export class CurrentStateComponent implements OnInit {

  state: VehicleInfo;


  constructor(private service: TeslaDataService) {
    // TODO Fix this shortcut. Here I'm assuming every account has one car only.
    service.getVehicles().subscribe(state => this.state = state[0]);
  }

  ngOnInit() {
  }

}
