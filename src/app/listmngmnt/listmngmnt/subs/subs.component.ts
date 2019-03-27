import { Component, OnInit } from '@angular/core';
import { SubsService } from './subs.service';

@Component({
  selector: 'app-subs',
  templateUrl: './subs.component.html',
  styleUrls: ['./subs.component.css']
})
export class SubsComponent {
  public subs = [];
  constructor(private subsService: SubsService) { }
  showSpinner: boolean = true;
  err = {
    status: false,
    msg: ''
  }
  ngOnInit() {
    this.subsService.getSub()
      .subscribe(data => {
        this.subs = data;
        this.showSpinner = false;
      }, err => {
        this.err.status = true;
        this.err.msg = err.statusText
      });
  }
}
