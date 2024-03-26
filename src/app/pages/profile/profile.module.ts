import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ProfilePersonComponent } from './profile-person/profile-person.component';
import { ProfileReportComponent } from './profile-report/profile-report.component';


const routes: Routes = [
  { path: '', component: ProfileComponent },
]

@NgModule({
  declarations: [
    ProfileComponent,
    ProfilePersonComponent,
    ProfileReportComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: []
})
export class ProfileModule { }
