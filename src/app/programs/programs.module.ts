import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsService } from './services/programs.service';

import { ProgramsRoutingModule } from './programs-routing.module';

import { ProgramListComponent } from './program-list/program-list.component';


@NgModule({
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ],
  declarations: [ProgramListComponent],
  providers: [ProgramsService]
})
export class ProgramsModule { }
