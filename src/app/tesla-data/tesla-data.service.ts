import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ClimateState, DriveState, GuiSettings, LoginResponse, VehicleInfo} from './responses';

@Injectable({
  providedIn: 'root'
})
export class TeslaDataService {

  constructor() { }


  login(username: string, password: string): Observable<LoginResponse> {
    // POST to /token: {
    //   'email': 'achautard@gmail.com', 'password': '54'
    // }
      return of({
        'access_token': '23629667a9a4e669db96933ca529e37c694252d270a297620971e12f558a1303',
        'token_type': 'bearer',
        'expires_in': 3888000,
        'refresh_token': '4c2f03bc74c575324a0d15edb2e949f38c7c8e602b0264ea17be08a9b51b0dab',
        'created_at': 1538267516
      });
  }

  getVehicles(): Observable<VehicleInfo[]> {
    // GET /vehicles header: token : value
    return of([
      {
        'id': 45147874849043970,
        'vehicle_id': 1560172885,
        'vin': '5YJ3E1EA2JF050052',
        'display_name': 'Model 3',
        'option_codes': 'AD15,MDL3,PBSB,RENA,BT37,ID3W,RF3G,S3PB,DRLH,DV2W,W39B,APF0,COUS,BC3B,CH07,PC30,FC3P,FG31,GLFR,HL31,HM31,IL31,LTPB,MR31,FM3B,RS3H,SA3P,STCP,SC04,SU3C,T3CA,TW00,TM00,UT3P,WR00,AU3P,APH3,AF00,ZCST,MI00,CDM0',
        'color': null,
        'tokens': [
          'd05f9ebe797940d9',
          '689cc71807062804'
        ],
        'state': 'asleep',
        'in_service': false,
        // This is the actual code to use for web requests
        'id_s': '45147874849043965',
        'calendar_enabled': true,
        'backseat_token': null,
        'backseat_token_updated_at': null
      }
    ]);
  }

  getDriveState(): Observable<DriveState> {
    // GET /driveState/45147874849043965 header: token : value
    return of({
        'shift_state': null,
        'speed': null,
        'power': 0,
        'latitude': 38.669793,
        'longitude': -121.526329,
        'heading': 88,
        'gps_as_of': 1538268201,
        'native_location_supported': 1,
        'native_latitude': 38.669793,
        'native_longitude': -121.526329,
        'native_type': 'wgs',
        'timestamp': 1538268202904
      });
  }

  getClimateState(): Observable<ClimateState> {
    // GET /climateState/45147874849043965 header: token : value
    return of({
        'inside_temp': 30.1,
        'outside_temp': 25,
        'driver_temp_setting': 23,
        'passenger_temp_setting': 23,
        'left_temp_direction': 333,
        'right_temp_direction': 333,
        'is_front_defroster_on': false,
        'is_rear_defroster_on': false,
        'fan_status': 0,
        'is_climate_on': false,
        'min_avail_temp': 15,
        'max_avail_temp': 28,
        'seat_heater_left': false,
        'seat_heater_right': false,
        'seat_heater_rear_left': false,
        'seat_heater_rear_right': false,
        'seat_heater_rear_center': false,
        'seat_heater_rear_right_back': 0,
        'seat_heater_rear_left_back': 0,
        'battery_heater': false,
        'battery_heater_no_power': null,
        'steering_wheel_heater': false,
        'wiper_blade_heater': false,
        'side_mirror_heaters': false,
        'is_preconditioning': false,
        'smart_preconditioning': false,
        'is_auto_conditioning_on': false,
        'timestamp': 1538268402051
      });
  }

  getGuiSettings(): Observable<GuiSettings> {
    // GET /guiSettings/45147874849043965
    return of({
        'gui_distance_units': 'mi/hr',
        'gui_temperature_units': 'C',
        'gui_charge_rate_units': 'mi/hr',
        'gui_24_hour_time': false,
        'gui_range_display': 'Rated',
        'timestamp': 1538268543844
    });
  }
}
