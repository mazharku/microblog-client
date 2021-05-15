import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { BlogPost } from '../model/BlogPost';
import { FormBuilder } from '@angular/forms';
import { BlogUser } from '../model/BlogUser';
import { MatDialog } from '@angular/material/dialog'
import {CustomDialog} from  '../custom-dialog/CustomDialog'
import { RequestResponse } from '../model/RequestResponse';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {
 
  IdValue: string = localStorage.getItem("userId")  || '';
  userId: string = this.IdValue.replace("\"",'').replace("\"", '')
  post: BlogPost= new BlogPost();
  user: BlogUser = new BlogUser();
  checkoutForm = this.formBuilder.group({
    title: '',
    post: ''
  });
  customDialog : CustomDialog
  response : any
  constructor(public dialog: MatDialog,private route: ActivatedRoute, private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { 
    this.customDialog = new CustomDialog(dialog)
  }

  onSubmit() {
    this.user.blogUserId = this.userId
    console.log(this.user)
    this.post =  this.checkoutForm.value
    console.log(this.post)
    this.post.user = this.user
    console.log(this.post)
    this.doCreatePost();   
  }
  public doCreatePost() {
    let resp= this.service.makePost(this.post);
    resp.subscribe(data => {
      this.response = <RequestResponse>data;
      console.log(data)
      if (this.response.status===false) {
        this.customDialog.OpenDialogs(this.response.message)
      }
      else {
        this.gotoList();
      }
     
    }, 
    error => this.customDialog.OpenDialogs(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }

}
