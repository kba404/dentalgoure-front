import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  roles: string[] = [];
  isLoggedIn = false;
  username: string;
  fname: string;
  lname: string;
  email: string;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getUser().username;
      this.fname = this.tokenStorage.getUser().fname;
      this.lname = this.tokenStorage.getUser().lname;
      this.email = this.tokenStorage.getUser().email;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
}
