import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpaceXService {
  private SERVER_URL = "https://api.spacexdata.com/v3/launches?limit=1&launch_success=true";

  constructor(private httpClient: HttpClient) { }

  public getIntial(){  
		return this.httpClient.get(this.SERVER_URL);  
	}
}
