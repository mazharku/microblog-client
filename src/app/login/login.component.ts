import { Component, OnInit } from '@angular/core';
import { BlogUser } from '../model/BlogUser';
import { BlogServiceService } from '../blog-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { LoggedUser } from '../model/LoggedUser';
import { MatDialog } from '@angular/material/dialog'
import {CustomDialog} from  '../custom-dialog/CustomDialog'
import { RequestResponse } from '../model/RequestResponse';

@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  [x: string]: any;

  user: BlogUser = new BlogUser();
  loginUser : LoggedUser = new LoggedUser()
  checkoutForm = this.formBuilder.group({
    email: '',
    password: ''
  });
  customDialog : CustomDialog
  response : any
  constructor( private dialog: MatDialog, private route: ActivatedRoute, private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { 
    this.customDialog = new CustomDialog(dialog)
  }
  onSubmit() {
    this.loginUser =  this.checkoutForm.value
    this.doLogin();   
  }
  public doLogin() {
    let resp= this.service.doLogin(this.loginUser);
    resp.subscribe(data => {
    
      this.response = <RequestResponse>data;
      console.log("response " + this.response)
      if(this.response.status===false){
        console.log("response inside false " + this.response)
        this.response = <RequestResponse>data;
        localStorage.setItem("userName", "")
        localStorage.setItem("userId", "")
        this.customDialog.OpenDialogs(this.response.message)
      }
      else {
        this.user = <BlogUser> data
        localStorage.setItem("userName", JSON.stringify(this.user.blogUserName))
        localStorage.setItem("userId", JSON.stringify(this.user.blogUserId))
        this.gotoList();
      }
     
    }, 
    error =>  this.customDialog.OpenDialogs(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }
 
}
