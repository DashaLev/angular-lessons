import {Component, Input, OnInit} from '@angular/core';

import { IUser } from 'src/app/interfaces/user.interface';
import {ActivatedRoute, Router} from "@angular/router";
import {ActiveUserService} from "../../services/active-user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;
  path: number;
  activeUser:number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private activeUserService: ActiveUserService) {

  }

  ngOnInit(): void {

  }


  navToDetails() {
    this.router.navigate([this.user.id],
      {relativeTo: this.activatedRoute, state: this.user});
    // this.isShowed = false

    this.activeUserService.setActiveUser(this.user.id)

    // this.path = +this.router.url.split("/")[2];
    // this.path === this.user.id ? this.isShowed = false : this.isShowed = true

    this.activeUserService.getActiveUser().subscribe(value => this.activeUser = value)
  }
}
