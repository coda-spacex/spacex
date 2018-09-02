import { Component, OnInit } from '@angular/core';
import { LaunchesService } from '../../core/api/launches/launches.service';

@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.scss']
})
export class LaunchesComponent implements OnInit {

  allLaunches: any[] = [];

  constructor(private launchesService: LaunchesService) { }

  ngOnInit() {
    this.getAllLaunches();
  }

  getAllLaunches() {
    this.launchesService.getAllLaunches().subscribe(response => {
      this.allLaunches = response;
    });
  }
}
