import { Component, OnInit } from '@angular/core';
import { BlogUser } from '../model/BlogUser';
import { BlogServiceService } from '../blog-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoggedUser } from '../model/LoggedUser';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  user: BlogUser = new BlogUser();
  loginUser : LoggedUser = new LoggedUser()
  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  constructor(private route: ActivatedRoute, private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { }
  onSubmit() {
    this.loginUser =  this.checkoutForm.value
    this.doLogin();   
  }
  public doLogin() {
    let resp= this.service.doLogin(this.loginUser);
    resp.subscribe(data => {
     
      this.user = <BlogUser> data
      if(data.valueOf().hasOwnProperty("status")){
        localStorage.setItem("userName", "")
        localStorage.setItem("userId", "")
      }
      else {
        localStorage.setItem("userName", JSON.stringify(this.user.userName))
        localStorage.setItem("userId", JSON.stringify(this.user.id))
        this.gotoList();
      }
     
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }
 

}
