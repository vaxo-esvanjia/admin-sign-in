import { Component, Injectable, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators, FormControl,FormsModule,NgModel } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';
import { environment } from 'src/environments/environment';
import { Users } from '../../details page/details/details.model';
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
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) { 
 
  }
  
 
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
  
  submit(){
  
    this.userService.getUser().subscribe(usernames =>{
      usernames.some((i:any)=>{
       
        if(i.username==this.myForm.get('username')?.value){
          this.wrongUser = false
          this.router.navigate(['homecard'])
          
          return true
          
        }
        else{
          this.wrongUser = true
          return false
          
        }
      })

      
    })


  }
}
