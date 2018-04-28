import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsService } from './services/programs.service';

import { ProgramsRoutingModule } from './programs-routing.module';

import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramDetailComponent } from './program-detail/program-detail.component';


@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ],
  declarations: [ProgramListComponent, ProgramDetailComponent],
  providers: [ProgramsService]
})
export class ProgramsModule { }
