import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {TokenStorageService} from '../../../services/token-storage.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  roles: string[] = [];
  isLoggedIn = false;
  fname: string;
  lname: string;
  username: string;
  email: string;

  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.username = this.tokenStorage.getUser().username;
      this.email = this.tokenStorage.getUser().email;
      this.fname = this.tokenStorage.getUser().fname;
      this.lname = this.tokenStorage.getUser().lname;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  logout(): void {
    this.tokenStorage.signOut();
    this.router.navigate(['/']);
  }

}
