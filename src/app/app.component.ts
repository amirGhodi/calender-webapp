import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'calender-webapp';
  public dataList: any ;
  public data: object[] = [{
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    StartTime: new Date(2021, 1, 18, 9, 30),
    EndTime: new Date(2021, 1, 18, 11, 0)
}, {
    Id: 2,
    Subject: 'Thule Air Crash Report',
    StartTime: new Date(2021, 1, 19, 12, 0),
    EndTime: new Date(2021, 1, 19, 14, 0)
}, {
    Id: 3,
    Subject: 'Blue Moon Eclipse',
    StartTime: new Date(2021, 1, 20, 9, 30),
    EndTime: new Date(2021, 1, 20, 11, 0)
}, {
    Id: 4,
    Subject: 'Meteor Showers in 2021',
    StartTime: new Date(2021, 1, 21, 13, 0),
    EndTime: new Date(2021, 1, 21, 14, 30)
}];
  

  constructor() { }

  ngOnInit(): void {

    localStorage.setItem('data', JSON.stringify(this.data))
  }
  
}
