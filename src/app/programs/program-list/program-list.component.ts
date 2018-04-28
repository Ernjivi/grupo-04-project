import { Component, OnInit } from '@angular/core';
import { ProgramsService } from '../services/programs.service';

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css'],
})
export class ProgramListComponent implements OnInit {

  public programList: any;

  constructor(private programService: ProgramsService) { }

  ngOnInit() {
    this.programService.fetchPrograms()
      .subscribe(
        programs => this.programList = programs,
        err => console.log(err)
      );
  }

}
