import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StartStudyComponent } from './start-study/start-study.component';
import { StudyComponent } from './study/study.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent},
    { path: 'startStudy', component: StartStudyComponent},
    { path: 'study/:id', component: StudyComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];
