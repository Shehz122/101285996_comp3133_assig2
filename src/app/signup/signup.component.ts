import { Component, OnInit } from '@angular/core';
import {GraphmodelService} from '../graphmodels.service'
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  hide: boolean = true;
  
  username: any;

  registerForm = new FormGroup({

    username: new FormControl("", Validators.required),

    firstname: new FormControl("", Validators.required),
    
    lastname: new FormControl("", Validators.required),
    
    password: new FormControl("", Validators.required),
    
    email: new FormControl("", Validators.required),
    
    type: new FormControl("", Validators.required)

  })

  ngOnInit(): void {

    if(localStorage.getItem('token') !== null){ 

      localStorage.removeItem('token');
      
      localStorage.removeItem('username');
      
      localStorage.removeItem('type');
    }
  }
  onSubmit(){

    if(this.registerForm.valid) {
    
      this.db.addUser(this.registerForm.value).subscribe((res: any) => {
    
        alert(`User ${res.data.addUser.username} Created Successfully`);
       
        console.log(this.registerForm.value)
    
        this.router.navigate(['/login'])
      });
    }
  }

  constructor(private db: GraphmodelService, private router: Router) { 

    this.username = localStorage.getItem('username');
  
  }


}