import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MycampaignsRoutingModule } from './mycampaigns-routing.module';
import { MycampaignsComponent } from './mycampaigns/mycampaigns.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [MycampaignsComponent, SidebarComponent],
  imports: [
    CommonModule,
    MycampaignsRoutingModule
  ]
})
export class MycampaignsModule { }
