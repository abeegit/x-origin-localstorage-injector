import { Component, OnInit } from '@angular/core';
import { CrossStorageHub } from 'cross-storage';

@Component({
  selector: 'app-hub',
  templateUrl: './hub.component.html',
  styleUrls: ['./hub.component.sass']
})
export class HubComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("loading iframe")
    CrossStorageHub.init([
      {origin: /localhost:4201$/, allow: ['get']},
    ]);
  }

}
