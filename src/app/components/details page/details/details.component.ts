import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Users } from './details.model';
import { UserService } from 'src/app/core/service/user.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  usersArr: Users[] = [];
  selectedUser: Users | undefined;
 

  constructor(private userService: UserService, private router:  Router) { }

  ngOnInit(): void {
    this.userService.getUser().subscribe(users => {
      this.usersArr = users;
      console.log(this.usersArr);
    });
    document.addEventListener('click', this.onDocumentClick.bind(this));

  }
  hidden:boolean=false
  onDocumentClick(event: MouseEvent) {
    // Check if the click is outside the specific div
    if (!this.targetDiv.nativeElement.contains(event.target)) {
      // Update the click count
      this.hidden=true
      console.log('Click outside div. Count:',);
    }
  }

  @ViewChild('targetDiv')
  targetDiv!: ElementRef<any>;
  showContextMenu(event: MouseEvent, user: Users): void {
    event.preventDefault();
    this.selectedUser = user;
    console.log("adsddsa", event)
  
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

      console.log(this.usersArr);
  }
  goToDetails(){


    this.router.navigate(['homecard'])
  }
  
}
