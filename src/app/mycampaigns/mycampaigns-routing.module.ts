import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MycampaignsComponent } from './mycampaigns/mycampaigns.component';

const routes: Routes = [{
  path: 'campaigns/my',
  component: MycampaignsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MycampaignsRoutingModule { }
