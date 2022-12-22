import { UserService } from './user.service';
import { Component } from '@angular/core';
import { HttpService, ResponseBackend } from 'src/app/http.service';
import { User } from 'src/app/model/user';
import { UserDTO } from 'src/app/model/userDTO';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  newUser: any;

  constructor(private httpService: HttpService, private userService:UserService,  private actRoute: ActivatedRoute) {
    // this.userService.getUserData()
    // this.actRoute.data.subscribe(data => {
    //   console.log('Check route resolver data')
    //   console.log(data)

    // })

    // console.log("users constructor");
  }

  ngOnInit(){
    
    this.userService.getUserData().subscribe((data) => {
      this.userService.userList = data.data
      console.log(this.userService.userList);
    })
}


  addUserParent(profileForm: any) {
    this.httpService
      .addNewUser(profileForm)
      .subscribe((result: ResponseBackend) => {
        this.newUser = result.data;
        this.userService.userList.push(result.data);
      });
  }



}
