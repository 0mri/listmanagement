import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignscheduleComponent } from './campaignschedule.component';

describe('CampaignscheduleComponent', () => {
  let component: CampaignscheduleComponent;
  let fixture: ComponentFixture<CampaignscheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampaignscheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
