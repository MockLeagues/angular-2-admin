import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get("http://localhost:8000/api/users")
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));
  }

}
