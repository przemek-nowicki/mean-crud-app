import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {NgbDateAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AppErrorHandler } from "./app-error-handler";
import { HomeComponent } from './home/home.component';
import { UsersModule } from "./users/users.module";
import { NgbDateNativeAdapter } from "./app-date-adapter";
import { SimpleNotificationsModule } from 'angular2-notifications';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: AppErrorHandler
    },
    {
      provide: NgbDateAdapter,
      useClass: NgbDateNativeAdapter
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
