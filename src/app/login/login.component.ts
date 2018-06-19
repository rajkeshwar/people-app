import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'people-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user = {};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login() {
    console.log('user : ', this.user);
    this.router.navigate(['/home']);
  }
}
