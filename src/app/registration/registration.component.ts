import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BlogUser } from '../model/BlogUser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent  {

  user : BlogUser = new BlogUser()
  registrationForm = this.formBuilder.group({
    userName: '',
    email: '',
    password: '',
    gender: '',
    dob: Date
  });
  constructor(private route: ActivatedRoute, private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { }

  onSubmit() {
   
    this.user =  this.registrationForm.value
    this.doCreateUser();   
  }
  public doCreateUser() {
    let resp= this.service.makeUser(this.user)
    resp.subscribe(data => {
      console.log(data)
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }

}
