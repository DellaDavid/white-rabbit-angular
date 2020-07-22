import { CreateUserComponent } from './create-user/create-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { UserParentComponent } from './user-parent/user-parent.component';

const routes: Routes = [
  { path: '', component: UserParentComponent, children:
    [
      { path: 'home', component: HomeComponent },
      { path: 'create-user', component: CreateUserComponent },
      { path: '', redirectTo: '/user/home', pathMatch: 'full' },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
