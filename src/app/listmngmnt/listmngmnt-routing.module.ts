import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListmngmntComponent } from './listmngmnt/listmngmnt.component'
const routes: Routes = [{
  path: 'listmanage',
  component: ListmngmntComponent
}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListmngmntRoutingModule { }
