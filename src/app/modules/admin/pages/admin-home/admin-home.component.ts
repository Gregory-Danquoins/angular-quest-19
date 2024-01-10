import { Component, OnInit } from '@angular/core';
import { User } from '../../../../models/User.model';
import { UserService } from '../../../../user.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrl: './admin-home.component.css',
})
export class AdminHomeComponent implements OnInit {
  users: User[];
  userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => (this.users = data));
  }
}
