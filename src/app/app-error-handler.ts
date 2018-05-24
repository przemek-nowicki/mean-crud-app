import { ErrorHandler, Injectable} from '@angular/core';

@Injectable()
export class AppErrorHandler implements ErrorHandler {

  constructor() { }

  handleError(error: Error) {
    // TODO: send errors to logger
    console.error(error);
  }
}
