import { Component } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { RouterLink } from '@angular/router';
import { DateComponent } from "./date/date.component";

@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule, DateComponent, MatListModule, MatToolbarModule, MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
