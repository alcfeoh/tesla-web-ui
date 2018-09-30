export interface LoginResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  created_at: number;
}

export interface Response<T> {
  response: T;
}

/**
 * Current vehicle information
 */
export interface VehicleInfo {
  id: number;
  vehicle_id: number;
  vin: string;
  display_name: string;
  option_codes: string;
  color?: any;
  tokens: string[];
  state: string;
  in_service: boolean;
  id_s: string;
  calendar_enabled: boolean;
  backseat_token?: any;
  backseat_token_updated_at?: any;
}

/**
 * Current drive state of the car
 */
export interface DriveState {
  shift_state?: any;
  speed?: any;
  power: number;
  latitude: number;
  longitude: number;
  heading: number;
  gps_as_of: number;
  native_location_supported: number;
  native_latitude: number;
  native_longitude: number;
  native_type: string;
  timestamp: number;
}

export interface ClimateState {
  inside_temp: number;
  outside_temp: number;
  driver_temp_setting: number;
  passenger_temp_setting: number;
  left_temp_direction: number;
  right_temp_direction: number;
  is_front_defroster_on: boolean;
  is_rear_defroster_on: boolean;
  fan_status: number;
  is_climate_on: boolean;
  min_avail_temp: number;
  max_avail_temp: number;
  seat_heater_left: boolean;
  seat_heater_right: boolean;
  seat_heater_rear_left: boolean;
  seat_heater_rear_right: boolean;
  seat_heater_rear_center: boolean;
  seat_heater_rear_right_back: number;
  seat_heater_rear_left_back: number;
  battery_heater: boolean;
  battery_heater_no_power?: any;
  steering_wheel_heater: boolean;
  wiper_blade_heater: boolean;
  side_mirror_heaters: boolean;
  is_preconditioning: boolean;
  smart_preconditioning: boolean;
  is_auto_conditioning_on: boolean;
  timestamp: number;
}

export interface GuiSettings {
  gui_distance_units: string;
  gui_temperature_units: string;
  gui_charge_rate_units: string;
  gui_24_hour_time: boolean;
  gui_range_display: string;
  timestamp: number;
}
