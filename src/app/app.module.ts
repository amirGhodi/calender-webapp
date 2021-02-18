import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { CalenderDisplayComponent } from './calender-display/calender-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CalenderDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScheduleModule
  ],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
