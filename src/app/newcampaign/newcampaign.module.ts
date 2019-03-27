import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcampaignRoutingModule } from './newcampaign-routing.module';
import { NewcampaignComponent } from './newcampaign/newcampaign.component';

@NgModule({
  declarations: [NewcampaignComponent],
  imports: [
    CommonModule,
    NewcampaignRoutingModule
  ]
})
export class NewcampaignModule { }
