import { Component } from '@angular/core';
import { GlobalService } from '../../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(global: GlobalService) {
    global.pageTitle = 'Home'
  }

  public info = [
    {
      title: 'How was your day?',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en urna ultrice...',
      class: 'blue-info',
      iconImagePath: 'assets/img/icons/calendar.svg',
      arrowImagePath: 'assets/img/icons/arrow-right_blue.svg'
    },
    {
      title: 'Current Transist: 3rd House',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipscing elit. Ut vel odio en urna ultrice...',
      class: 'red-info',
      iconImagePath: 'assets/img/icons/clock.svg',
      arrowImagePath: 'assets/img/icons/arrow-right_red.svg'
    }
  ]
}
