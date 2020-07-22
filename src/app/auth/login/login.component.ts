import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { LOCALSTORAGE } from '../../shared/configs/app-constants'
import { AuthService } from './../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userList = [];
  inputTypeField:boolean ;
  loginFormGroup: FormGroup;

  constructor(private _authService: AuthService,
    private _loginFormBuilder : FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.getUserList();

    this.loginFormGroup = this._loginFormBuilder.group({
      name : ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  showpassword(){
    this.inputTypeField = !this.inputTypeField;
  }

  getUserList() {
    this._authService.getUserList().subscribe(res => {
      if(res["results"]) {
        localStorage.setItem(LOCALSTORAGE.usersList, JSON.stringify(res["results"]));
      }
    });
  }

  onSubmit() {
    this._authService.getUsers().subscribe(res => {
      if(res["username"] === this.loginFormGroup.controls.name.value) {
        this.loginFormGroup.controls.name.setErrors({'wrongNamePassword' : null});
        if(res["password"] === this.loginFormGroup.controls.password.value) {
          this.loginFormGroup.controls.password.setErrors({'wrongNamePassword' : null});
          this._router.navigate(['/user/home']);
        } else { 
          this.loginFormGroup.controls.password.setErrors({'wrongNamePassword' : 'true'});
         }
      } else { 
        this.loginFormGroup.controls.name.setErrors({'wrongNamePassword' : 'true'});
       }
    });
  }

}

// 