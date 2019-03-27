import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CampaignscheduleComponent } from './campaignschedule/campaignschedule.component';

const routes: Routes = [{
  path: 'campaigns/schedule',
  component: CampaignscheduleComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignscheduleRoutingModule { }
