import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
   private http: HttpClient
  ) {
    const result: Observable<any> = this.http.post(
      'http://localhost:3000/api/login',
      {
        login: 'jGosling',
        password: 'testTest1.',
      }
      );
      result.subscribe((res) => {
        localStorage.setItem('token', res.accessToken)
    });
  }


}
