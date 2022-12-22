import { ResponseBackend } from 'src/app/http.service';
import { Observable } from 'rxjs';
import { HttpService } from './../../http.service';
import { Injectable } from '@angular/core';
import { User } from 'src/app/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList: User[] = [];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
  }

  getUserData() : Observable<ResponseBackend> {
    console.log("userservice get data");

   return this.httpService.getUserData()
  //  .subscribe((result: any) => {
  //     this.userList = result.data;
  //     console.log("got data inside userservice");
  //     console.log(this.userList);
  //   });
  //   return this.userList
  }
}
