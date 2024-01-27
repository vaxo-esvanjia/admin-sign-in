import { Component, OnInit } from '@angular/core';
import { FormControl,FormsModule,NgModel } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';
import { Users } from '../../details page/details/details.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myusername:string = ""
  wrongUser:string= 'none'
  constructor(private userService: UserService, private router: Router) { }
  usernameArr:any
  routerLink:string = ''
  ngOnInit(): void {
    
  }
  
  submit(){
    console.log(this.myusername)
    this.userService.getUser().subscribe(usernames =>{
      usernames.map((i: any)=>{
       
        if(this.myusername==i.username){
          this.wrongUser = "none"
        }
        else{
          this.wrongUser = "block"
        }
      })
      // for (let i of this.usernameArr){
      //   console.log(i)
      //   if(this.username===i.username){
      //     console.log(i)
      //     this.wrongUser = "none"
      //     this.router.navigateByUrl('/homecard')
      //   }
      //   // else if(this.username!==i.username){
      //   //   this.wrongUser = 'block'
      //   //   console.log(this.wrongUser)
      //   // }
      //   // if(this.username!==i.username){
      //   //   this.wrongUser = "block"
      //   // }
   
      // }
      
    })


  }
}
