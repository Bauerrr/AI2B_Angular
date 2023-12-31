import {Component, OnInit} from '@angular/core';
import {User} from "../user";
import {DataService} from "../data.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];

  constructor(
    private dataService: DataService,
  ) {
  }

  ngOnInit() {
    this.dataService.users().subscribe(users => {
      this.users = users;
    });
  }
}
