import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  users: Array<User> = [];

  constructor(private UserService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.UserService.getUsers().subscribe(response => {
      this.users = response;
    })
  }

}
