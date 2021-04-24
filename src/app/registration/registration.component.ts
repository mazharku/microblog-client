import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { BlogUser } from '../model/BlogUser';
import { MatDialog } from '@angular/material/dialog'
import {CustomDialog} from  '../custom-dialog/CustomDialog'

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
  customDialog : CustomDialog
  response : any
  constructor(private dialog: MatDialog,private route: ActivatedRoute, private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { 
    this.customDialog = new CustomDialog(dialog)
  }

  onSubmit() {
   
    this.user =  this.registrationForm.value
    this.doCreateUser();   
  }
  public doCreateUser() {
    let resp= this.service.makeUser(this.user)
    resp.subscribe(data => {

      this.response = <Response>data;
      this.customDialog.OpenDialogs(this.response.message)
      this.gotoList();
    }, 
    error => this.customDialog.OpenDialogs(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }

}
