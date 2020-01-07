import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  private loggedIn: boolean; 

  constructor() { }

  isLoggedIn(): boolean {
    // Use server to determine this.
    return this.loggedIn;
  }

  logIn(username: string, password: string): Observable<any> {
    return new Observable((observable) => {
      const handler = (e) => observable.next(e);

      // Use server to do this
      setTimeout(() => {
        if(username === 'hans' && password === 'berta') {
          this.loggedIn = true;
          handler(true);
        } else {
          handler(false);
        }
      }, 750);
    })
  }

  logOut(): void {
    this.loggedIn = false;
  }
}
