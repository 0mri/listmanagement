import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignscheduleRoutingModule } from './campaignschedule-routing.module';
import { CampaignscheduleComponent } from './campaignschedule/campaignschedule.component';


@NgModule({
  declarations: [CampaignscheduleComponent],
  imports: [
    CommonModule,
    CampaignscheduleRoutingModule,
    
  ]
})
export class CampaignscheduleModule { }
