import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../user.service';
import { User } from '../../../../models/User.model';

@Component({
  selector: 'app-account-home',
  templateUrl: './account-home.component.html',
  styleUrl: './account-home.component.css',
})
export class AccountHomeComponent implements OnInit {
  user: User;
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(
        (data) =>
          (this.user = data[Math.floor(Math.random() * data.length - 1)])
      );
  }
}
