import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import {map,catchError} from 'rxjs/operators';
import { Observable,throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }


  public handleError(err:HttpErrorResponse){
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError('error message');
  }

  fetchListOfUsers(userId:any):Observable<any>{
    var url=`https://jsonplaceholder.typicode.com/users?id=${userId}`;
    return this.http.get(url)
    .pipe(map(response=>response),
     catchError(this.handleError));

  }
}
