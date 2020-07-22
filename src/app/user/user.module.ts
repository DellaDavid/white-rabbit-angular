import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { UserRoutingModule } from './user-routing.module';
import { UserParentComponent } from './user-parent/user-parent.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';


@NgModule({
  declarations: [UserParentComponent, HomeComponent, CreateUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
