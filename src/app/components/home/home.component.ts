import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public currentUser: User;

  constructor() { }

  ngOnInit(): void {
    JSON.stringify(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
  }

}
