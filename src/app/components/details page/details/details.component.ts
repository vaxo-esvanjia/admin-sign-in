import { Component, OnInit } from '@angular/core';
import { Users } from './details.model';
import { UserService } from 'src/app/core/service/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  usersArr: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users=>{
      this.usersArr = users
      console.log(this.usersArr)
    },

  )}

}

