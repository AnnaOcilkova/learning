import { UserService } from './user.service';
import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Injectable()
export class UserResolve implements Resolve<any> {

  constructor(private userService: UserService, private httpService : HttpService) {}

  async resolve() {
    console.log("resolver");

      return this.userService.getUserData()



  }
  }




