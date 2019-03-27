import { Component, OnInit, ViewChild } from '@angular/core';
import { OptionsInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { CalendarComponent } from 'ng-fullcalendar';
import listPlugin from '@fullcalendar/list';
import bootstrapPlugin from '@fullcalendar/bootstrap';

@Component({
  selector: 'app-campaignschedule',
  templateUrl: './campaignschedule.component.html',
  styleUrls: ['./campaignschedule.component.css']
})
export class CampaignscheduleComponent implements OnInit {

  options: OptionsInput;
  eventsModel: any;
  @ViewChild('fullcalendar') fullcalendar: CalendarComponent;
  ngOnInit() {
    this.options = {
      contentHeight: 600,
			header: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,dayGridWeek,listWeek'
			},
			eventSources: [
				'http://efra.im/admin/query/getschedule.php', // use the `url` property
    		],
      plugins: [ dayGridPlugin, interactionPlugin, listPlugin, bootstrapPlugin ],
      themeSystem: 'bootstrap',
    };
    
  }
  eventClick(model) {
    console.log(model);
  }
  eventDragStop(model) {
    console.log(model);
  }
  clickButton(model) {
    console.log(model);
  }
  dateClick(model) {
    console.log(model);
  }
  updateEvents() {
    this.eventsModel = [{
      title: 'Updaten Event',
      start: this.yearMonth + '-08',
      end: this.yearMonth + '-10'
    }];
  }
  get yearMonth(): string {
    const dateObj = new Date();
    return dateObj.getUTCFullYear() + '-' + (dateObj.getUTCMonth() + 1);
  }

}
