import {Injectable} from "@angular/core";
import {FileUploader} from "ng2-file-upload";
import {environment} from "../../environments/environment";

@Injectable()
export class UserUploader extends FileUploader {

  public onComplete:Function = (filePath:string) => null;

  constructor() {
    super({url: `${environment.apiUrl}/users/upload`, itemAlias: 'photo'});
    this.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
      this.onComplete(JSON.parse(response).filePath);
    };
  }
}
