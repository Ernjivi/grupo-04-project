import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../guards/auth.guard';

import { ProgramListComponent } from "./program-list/program-list.component";
import { ProgramDetailComponent } from './program-detail/program-detail.component';

const routes: Routes = [
  {
    path: 'program-list',
    component: ProgramListComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'program-detail/:id',
    component: ProgramDetailComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
