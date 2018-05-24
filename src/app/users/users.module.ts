import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import {UsersRoutingModule} from "./users-routing.module";
import {UserService} from "./user.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule
  ],
  declarations: [UserListComponent],
  providers: [UserService]
})
export class UsersModule {}
