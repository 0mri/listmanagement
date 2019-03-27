import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcampaignComponent } from './newcampaign/newcampaign.component';
const routes: Routes = [{
  path: 'campaigns/new',
  component: NewcampaignComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcampaignRoutingModule { }
