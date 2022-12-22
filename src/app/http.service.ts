import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './model/user';
import { UserDTO } from './model/userDTO';

export type ResponseBackend = {
  status:string;
  message:string;
  data:any;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }),
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {}

  getUserData():Observable<ResponseBackend> {
    return this.http.get<ResponseBackend>(
      'http://localhost:3000/api/admin/get-apprentices',
      this.httpOptions
    );
  }

  addNewUser(user : UserDTO) {
    return this.http.post(
      'http://localhost:3000/api/registration',
     user
    );
  }

deleteUser(user:User){
  return this.http.delete(
    `http://localhost:3000/api/admin/delete-user/${user.id}`, this.httpOptions );
}

editUser(changedUser:any){
  console.log(changedUser);

  return this.http.patch(
    `http://localhost:3000/api/user/update-profile`, changedUser, this.httpOptions );
}


}




