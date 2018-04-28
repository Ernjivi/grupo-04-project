import { Component, OnInit } from '@angular/core';

import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export interface UserLoginModel{
  username: string,
  password: string
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userLoginModel:UserLoginModel = {
    username: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit() {
  }

  login(){
    this.authService.login(
      this.userLoginModel.username,
      this.userLoginModel.password
    ).subscribe(loggedIn => {
      if(loggedIn){
        this.route.navigate(['/program-list']);
      }
    });
  }

}
