import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignscheduleRoutingModule } from './campaignschedule-routing.module';
import { CampaignscheduleComponent } from './campaignschedule/campaignschedule.component';
import { FullCalendarModule } from 'ng-fullcalendar';


@NgModule({
  declarations: [CampaignscheduleComponent],
  imports: [
    CommonModule,
    CampaignscheduleRoutingModule,
    FullCalendarModule,
  ]
})
export class CampaignscheduleModule { }
