import {Component} from '@angular/core';
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-start-study',
  imports: [CdkDropList, CdkDrag, MatListModule, MatToolbarModule, MatCardModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './start-study.component.html',
  styleUrl: './start-study.component.scss'
})
export class StartStudyComponent {
  todo = [{name:'CS450 PA2', due: 'Friday 11/8'}];

  done = [{name:'CS487 Design Report', due: 'Tuesday 10/28'}, {name:'ECE218 Midterm 2', due: 'Wednesday 11/13'}];

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
