import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { ProgramsService } from '../services/programs.service';


@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.component.html',
  styleUrls: ['./program-detail.component.css']
})
export class ProgramDetailComponent implements OnInit {

  public programDetail: any;

  constructor(
    private route: ActivatedRoute,
    private programService: ProgramsService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params:ParamMap) => this.programService.fetchProgram(params.get('id')))
      .subscribe(program => this.programDetail = program);
  }

}
