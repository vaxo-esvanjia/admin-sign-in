import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Users } from './details.model';
import { UserService } from 'src/app/core/service/user.service';
import { Route, Router } from '@angular/router';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

export class MyHammerConfig extends HammerGestureConfig {
  override overrides = {
    press: { time: 200 }, // Set the press time for long press
  };
}
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  providers:[
    {
      provide:HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
})
export class DetailsComponent implements OnInit {
  usersArr: Users[] = [];
  selectedUser: Users | undefined;
 contextMenuStyle:any = {}
 private longPressTimeout:any
  constructor(private userService: UserService, private router:  Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => {
      this.usersArr = users;
      
    });
    
     document.addEventListener('click', this.onDocumentClick.bind(this));
    
  }
  
  onDocumentClick(event: MouseEvent) {
    // Check if the click is outside the table
    if (!this.targetDiv.nativeElement.contains(event.target)) {
      
      this.closeContextMenu()
      clearTimeout(this.longPressTimeout)
      
    }
  }
  closeContextMenu(){
    this.contextMenuStyle = {
      'display': 'none'
    }
  }
  @ViewChild('targetDiv')
  targetDiv!: ElementRef<any>;
  showContextMenu(event: MouseEvent, user: Users): void {
    event.preventDefault();
    clearTimeout(this.longPressTimeout)
    this.longPressTimeout=setTimeout(()=>{
      this.selectedUser = user
      this.selectedUser = user;
      this.contextMenuStyle = {
        'display': 'block',
        'left.px': event.clientX,
        'top.px': event.clientY
      }
      this.userService.setSelectedUser(user)
    },200)

  }
  
  isRowSelected(user: Users): boolean {
    
    return this.selectedUser === user;
  }

  @HostListener('document:contextmenu', ['$event'])
  handleContextMenu(event: MouseEvent): void {
    // Clear the selected user when right-clicking outside the table
    const target = event.target as Element;
    if (!target.closest('tr')) {
      this.selectedUser = undefined;
    }
  }
// delete current user
  deleteUser() {
    if (this.selectedUser) {
      // Find the index of the selected user in the array
      const index = this.usersArr.indexOf(this.selectedUser);

      // Ensure the index is valid
      if (index !== -1) {
        // Remove the user from the array
        this.usersArr.splice(index, 1);

        // Clear the selected user
        this.selectedUser = undefined;
      }
    }      
  }
  //from context menu button details click function which
  //go to the homecard page
  goToDetails(){
    this.router.navigate(['homecard'])
  }
  
}
