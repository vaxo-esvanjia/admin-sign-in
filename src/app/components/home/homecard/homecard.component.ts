import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-homecard',
  templateUrl: './homecard.component.html',
  styleUrls: ['./homecard.component.css']
})
export class HomecardComponent implements OnInit {
  selectedUser:any
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.selectedUser = this.userService.getSelectedUser()
  }
  
}
