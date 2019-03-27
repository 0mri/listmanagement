import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListmngmntRoutingModule } from './listmngmnt-routing.module';
import { ListmngmntComponent } from './listmngmnt/listmngmnt.component';
import { SubsComponent } from './listmngmnt/subs/subs.component';
import { LoadingSpinnerComponent } from '../component/ui/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [ListmngmntComponent, SubsComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    ListmngmntRoutingModule
  ]
})
export class ListmngmntModule { }
