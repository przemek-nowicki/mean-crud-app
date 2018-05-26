import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import {NgbDateAdapter, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { AppErrorHandler } from "./app-error-handler";
import { HomeComponent } from './home/home.component';
import { UsersModule } from "./users/users.module";
import { NgbDateNativeAdapter } from "./app-date-adapter";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    UsersModule
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
