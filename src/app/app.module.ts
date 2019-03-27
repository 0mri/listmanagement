import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { ListmngmntModule } from './listmngmnt/listmngmnt.module';
import { NewcampaignModule } from './newcampaign/newcampaign.module';
import { CampaignscheduleModule } from './campaignschedule/campaignschedule.module';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MycampaignsModule } from './mycampaigns/mycampaigns.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    BrowserAnimationsModule,
    CampaignscheduleModule,
    AppRoutingModule,
    ListmngmntModule,
    NewcampaignModule,
    MycampaignsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
