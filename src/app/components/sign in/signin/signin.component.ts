import { Component, Injectable, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl,FormsModule,NgModel } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myusername= new FormControl
  wrongUser:boolean= false
  myForm!: FormGroup;
  password:string=""
  isFormValid: boolean = false;
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {}
  routerLink:string = ''
  ngOnInit(): void {
    this.myForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.myForm.valueChanges.subscribe(() => {
      this.isFormValid = this.myForm.valid;
    });
  }
  // sign in button click which checks if username
  //and password is correct and go to the details page
  submit(){
    this.userService.getUser().subscribe(usernames =>{
      usernames.some(()=>{
        if(this.myForm.get('username')?.value=='admin' && this.myForm.get('password')?.value=='admin'){
          this.router.navigate(['details'])
          return true
        }
        // this code checks username and if we write correct
        //username in input we will go to the homecard where
        //is details about this username
        // if(i.username==this.myForm.get('username')?.value){
        //   this.wrongUser = false
        //   this.router.navigate(['homecard'])
        //   return true
        // }
        else{
          this.wrongUser = true
          return false   
        }
      })
    })
  }
}
