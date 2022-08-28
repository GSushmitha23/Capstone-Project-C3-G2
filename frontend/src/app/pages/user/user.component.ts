import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;

  constructor( private location: Location,
               private userService: UserService,
               private router: Router) {
    this.user = new User();

  }



  ngOnInit() {


  }
  onSubmit() {
    this.userService.signUp(this.user).subscribe(u => {
      this.router.navigate(['/login']);
    },
        e => {});
  }
}