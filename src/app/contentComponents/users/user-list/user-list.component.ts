import { UserService } from './../user.service';
import { Component, TemplateRef } from '@angular/core';
import { HttpService, ResponseBackend } from 'src/app/http.service';
import { User } from 'src/app/model/user';
import { UserDTO } from 'src/app/model/userDTO';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  template: TemplateRef<any>;
  responseAdd: any;
  userList: User[]

  constructor(
    private httpService: HttpService,
    private userService: UserService
  ) {
    this.userList = this.userService.userList;
  }





  ngOnInit(): void {
    console.log(this.userService.userList);
  }

  remove(user: User) {
    this.httpService.deleteUser(user).subscribe();
    this.userService.userList = this.userService.userList.filter((userM) => {
      return userM != user;
    });
  }

  editUserParent(changedUser: UserDTO, originalUser: User) {
    delete changedUser.userName;
    const editData = {
      ...changedUser,
      originalUserName: originalUser.userName,
    };
    delete editData.userName;
    delete editData.password;
    if (changedUser.email == originalUser.email) delete editData.email;

    this.httpService.editUser(editData).subscribe((result: any) => {
      const changedUsers = this.userService.userList.map((user: User) => {
        return user == originalUser ? result.result.updatedUser : user;
      });
      this.userService.userList = changedUsers;
    });
  }
}
