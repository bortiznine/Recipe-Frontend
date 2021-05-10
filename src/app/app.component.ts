import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recipes-frontend-title-update';
  currentUser: any;
  constructor(private userService: UserService) { }
  ngOnInit(): void {
    this.userService.searchSubject.subscribe(currentUser => {
      this.currentUser = currentUser;
      console.log(currentUser);
    });
  }
}
