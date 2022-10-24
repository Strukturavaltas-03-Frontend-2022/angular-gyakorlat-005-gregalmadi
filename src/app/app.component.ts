import { Component, Output, EventEmitter, HostListener } from '@angular/core';
import { User } from './model/user';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'The good Angular programmer';
  userService: UserService = new UserService();
  usersList: User[] = this.userService.list;
  currentUser: User = new User();

  userSelect(user: User): void {
    this.currentUser = this.usersList[user.id];
    console.log(user, user.id);
  }
  userUpdate(user: User): void {
    this.userService.updateUser(user);
  }
  userRemove(user: User): void {
    this.userService.removeUser(user);
  }

  constructor() {}
}
