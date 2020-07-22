import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_URLS } from '../configs/app-constants'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  getUsers() {
    return this._http.get(API_URLS.usersDB);
  }

  getUserList() {
    return this._http.get(API_URLS.usersList);
  }

}
