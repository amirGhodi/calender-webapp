import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, TimeScaleModel, WorkHoursModel } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-calender-display',
  templateUrl: './calender-display.component.html',
  styleUrls: ['./calender-display.component.scss']
})
export class CalenderDisplayComponent implements OnInit {
  public dataList = JSON.parse(localStorage.getItem("data"))
  public timeScale: TimeScaleModel = { enable: true, interval: 60, slotCount: 1 };
  public scheduleHours: WorkHoursModel  = { highlight: true, start: '9:00', end: '19:00' };  
  public eventSettings: EventSettingsModel = {
    dataSource: this.dataList
  }
  constructor() { }

  ngOnInit(): void {
  
  }

}
