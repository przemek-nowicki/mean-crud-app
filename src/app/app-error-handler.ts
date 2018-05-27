import {ErrorHandler, Injectable, Injector} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NotificationsService} from "angular2-notifications";

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor(private injector: Injector) { }

  handleError(error: Error | HttpErrorResponse) {
    // TODO: send errors to kind of error tracking tool (e.g. rollbar)
    if (error instanceof HttpErrorResponse) {
      let details:string = error.message;
      if(error.error.message) {
        details = error.error.message;
      }
      this.injector.get(NotificationsService).error('Something went wrong', details, {timeOut: 3000});
      console.error(error);
    } else {
      console.error(error);
    }
  }
}
