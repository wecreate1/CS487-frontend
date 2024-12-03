import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-date',
  imports: [],
  templateUrl: './date.component.html',
  styleUrl: './date.component.scss'
})
export class DateComponent {
  @Input() dayOfWeek!: string;
  @Input() month!: string;
  @Input() day!: string;

}
