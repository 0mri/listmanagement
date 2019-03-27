import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListmngmntComponent } from './listmngmnt.component';

describe('ListmngmntComponent', () => {
  let component: ListmngmntComponent;
  let fixture: ComponentFixture<ListmngmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListmngmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListmngmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
