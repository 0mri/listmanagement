import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SlimSelect from 'slim-select'

@Component({
  selector: 'app-newcampaign',
  templateUrl: './newcampaign.component.html',
  styleUrls: ['./newcampaign.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class NewcampaignComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const select = new SlimSelect({
      showSearch: false,
      select: '#single',
    })
    
  }

}
