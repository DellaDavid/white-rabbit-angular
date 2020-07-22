import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LOCALSTORAGE } from '../../shared/configs/app-constants';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  createFormGroup: FormGroup

  constructor(private _createUserBuilder : FormBuilder,
    private _router: Router) { }

  ngOnInit() {
    this.createFormGroup = this._createUserBuilder.group({
      title : ['', Validators.required],
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      email : ['', Validators.required],
      username : ['', Validators.required],
      password: ['', Validators.required],
      dob : ['', Validators.required],
      phone : ['', Validators.required],
    })
  }

  onSubmit() {
    const user = {
      name: {
        first: this.createFormGroup.controls.fname.value,
        last: this.createFormGroup.controls.lname.value,
        title: this.createFormGroup.controls.title.value
      },
      email: this.createFormGroup.controls.email.value,
      username: this.createFormGroup.controls.username.value,
      password: this.createFormGroup.controls.password.value,
      dob: this.createFormGroup.controls.dob.value,
      phone: this.createFormGroup.controls.phone.value
    }
    const userList = JSON.parse(localStorage.getItem(LOCALSTORAGE.usersList));
    userList.push({user: user});
    localStorage.setItem(LOCALSTORAGE.usersList, JSON.stringify(userList));
    this._router.navigate(['/user/home']);
  }

}
