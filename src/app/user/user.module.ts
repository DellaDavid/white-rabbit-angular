import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

import { UserRoutingModule } from './user-routing.module';
import { UserParentComponent } from './user-parent/user-parent.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [UserParentComponent, HomeComponent],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ]
})
export class UserModule { }
