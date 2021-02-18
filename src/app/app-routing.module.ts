import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalenderDisplayComponent } from './calender-display/calender-display.component'

const routes: Routes = [
  {path:"", redirectTo:"display", pathMatch:"full"},
  {path:"display", component:CalenderDisplayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
