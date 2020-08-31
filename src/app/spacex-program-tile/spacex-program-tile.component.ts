import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { IAppState } from '../store/store';
import { DISPLAY_ACTIVE_PRGM } from '../store/actions/actions';
import { SpaceXRoot, Rocket, Telemetry, LaunchSite, Timeline, Links } from '../spaceX';
import { SpaceXService } from '../space-x.service';

@Component({
  selector: 'app-spacex-program-tile',
  templateUrl: './spacex-program-tile.component.html',
  styleUrls: ['./spacex-program-tile.component.css']
})
export class SpacexProgramTileComponent implements OnInit {
  @select() spaceXObj;
  myObj: [];

  links: Links = {
    mission_patch: "https://images2.imgbox.com/40/e3/GypSkayF_o.png",
    mission_patch_small: "https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
    reddit_campaign: null,
    reddit_launch: null,
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link: "https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
    wikipedia: "https://en.wikipedia.org/wiki/DemoSat",
    video_link: "https://www.youtube.com/watch?v=0a_00nJ_Y88",
    youtube_id: "0a_00nJ_Y88",
    flickr_images: []
  }
  model: SpaceXRoot[] = [{
    flight_number: 0,
    mission_name: "FalconSat",
    mission_id: [],
    launch_year: "2006",
    launch_date_unix: 1234,
    launch_date_utc: new Date(),
    launch_date_local: new Date(),
    is_tentative: false,
    tentative_max_precision: "",
    tbd: false,
    launch_window: 13646,
    rocket: null,//obj
    ships: [],
    telemetry: null,//obj
    launch_site: null,
    launch_success: false,
    links: this.links,//obj
    details: '',
    upcoming: false,
    static_fire_date_utc: null,//obj
    static_fire_date_unix: 176567,
    timeline: null,//obj
    crew: null
  }]

  constructor(private ngRedux: NgRedux<IAppState>, private spaceXService: SpaceXService) { }

  ngOnInit() {
    // this.spaceXService.getIntial().subscribe((data: SpaceXRoot) => {
    //   console.log(data);
    //   this.model = data;
    // }, error => {
    //   console.log(error);
    // });

  }
  displayActProg() {
    this.ngRedux.dispatch({ type: DISPLAY_ACTIVE_PRGM });
  }

}
