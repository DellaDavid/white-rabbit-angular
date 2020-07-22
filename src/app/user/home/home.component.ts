import { Component, OnInit } from '@angular/core';

import { LOCALSTORAGE } from '../../shared/configs/app-constants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userList = [];
  tempUserList = [];
  searchText = '';

  constructor() { }

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.userList = JSON.parse(localStorage.getItem(LOCALSTORAGE.usersList));
    this.tempUserList = JSON.parse(JSON.stringify(this.userList));
  }

  searchUsers() {
    this.userList = this.tempUserList.filter(user => user.user.name.first.includes(this.searchText) || user.user.name.last.includes(this.searchText));
  }

}
