import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

const CONTENT : {[key:string]: any} = 
{'1': {id: 1, name: "CS487 Design Report", desc: "<ul><li>Cover Page Elit morbi pharetra</li><li>Section 2: Posuere neque posuere congue</li><li>Section 1: Viverra nunc lectus netus ultrices lacus eget.</li></ul>", yres: ['Team Document', 'Software Engineering Textbook', 'Canvas'], rres: ['Week 5 Slides', 'Week 5 Recordings (Panopto)', 'SWEngineerBook.com', 'UML Diagram Tutorial (YouTube)'], progress: 20}, '2': {id: 2, name: "ECE218 Midterm 2", desc: "Second midterm covering karnagh maps, muxes, and decoders", yres: ['Logic Design Book', 'Canvas'], rres: ['HW3 w/ Answers', 'HW4 w/ Answers', 'Lecture notes'], progress: 10}}

function getContent(id : string | null) : any {
  if (typeof id === 'string')
    return CONTENT[id];
}

@Component({
  selector: 'app-study',
  imports: [MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule, MatListModule, RouterLink, MatCardModule, MatGridListModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './study.component.html',
  styleUrl: './study.component.scss'
})
export class StudyComponent {
  studySet = [{name:'CS450 PA2', due: 'Friday 11/8'}, {name:'CS487 Design Report', due: 'Tuesday 10/28'}, {name:'ECE218 Midterm 2', due: 'Wednesday 11/13'}];
  content : any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map)=> this.content = getContent(map.get('id')));
  }
}
