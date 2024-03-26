import { Component } from '@angular/core';

@Component({
  selector: 'app-home-tasks',
  templateUrl: './home-tasks.component.html',
  styleUrl: './home-tasks.component.scss'
})
export class HomeTasksComponent {
  public tasks = [
    {
      title: 'Daily astromeditation',
      class: 'blue-task',
      num: '3'
    },
    {
      title: 'Daily sleep astromeditation',
      class: 'red-task',
      num: '1'
    },
    {
      title: 'Daily mantra',
      class: 'green-task',
      num: '2'
    }
  ]

  public progress = {
    value: '60%',
    class: 'progress-percent'
  }
}
