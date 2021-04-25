import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { BlogComment } from '../model/BlogComment';
import { BlogPost } from '../model/BlogPost';
import { BlogUser } from '../model/BlogUser';
import { PostModel } from '../model/PostModel';
import { MatDialog } from '@angular/material/dialog'
import {CustomDialog} from  '../custom-dialog/CustomDialog'
@Component({
  selector: 'app-post-model',
  templateUrl: './post-model.component.html',
  styleUrls: ['./post-model.component.css']
})
export class PostModelComponent implements OnInit {

  @Input()
  post: PostModel = new PostModel();
  IdValue: string = localStorage.getItem("userId")  || '';
  userId: string = this.IdValue.replace("\"",'').replace("\"", '')
  numOfLike : any
  comments: any;
  likedByCurrentUser: any;
  comment: BlogComment = new BlogComment();
  user : BlogUser = new BlogUser();
  commentForm = this.formBuilder.group({
    comment: '',
  });
  isCollapsed : boolean = false;
  customDialog : CustomDialog
  response : any
  constructor( private dialog: MatDialog,private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { 
    this.customDialog = new CustomDialog(dialog)
  }

  ngOnInit(): void {
    this.loadLikeCount()
    this. loadComments()
    console.log("id" + this.post.id)
  }

  loadLikeCount() {
    let resp= this.service.getNumberOfLikes(this.post.id)
    resp.subscribe((res)=>this.numOfLike=res);
    this.isLikedByCurrentUser();
  }

  isLikedByCurrentUser(){
    if (this.userId == "" || this.userId ===undefined) {
       return;
    }
    let resp= this.service.isLikeByCurrentUser(this.post.id, this.userId)
    resp.subscribe(res=>{
      console.log("data"+ JSON.stringify(res))
      this.likedByCurrentUser=res
      console.log("res"+ JSON.stringify( this.likedByCurrentUser))
    },
    error => console.log("error "+error));
  }

  loadComments() {
    let resp= this.service.getCommentsOfPost(this.post.id)
    resp.subscribe(res=>{
     // console.log("data"+ JSON.stringify(res))
      this.comments=res
     // console.log("res"+ JSON.stringify( this.comments))
    },
    error => console.log("error "+error));
  }

  updatelike() {
    if (this.userId == "" || this.userId ===undefined) {
      this.customDialog.OpenDialogs("You are not logged In! please log in to continue")
      return;
   }
    console.log(this.post.id + "  h  "+this.userId)
    let resp= this.service.updateLike(this.post.id, this.userId)
    resp.subscribe(data => {
      this.response = <Response>data;

      if( this.response.status===false){
        this.customDialog.OpenDialogs(this.response.message)
      }
      else {
        this.loadLikeCount()
      }
     
    }, 
    error =>  this.customDialog.OpenDialogs(error));
  }

  onSubmit() {
    if (this.userId == "" || this.userId ===undefined) {
      this.customDialog.OpenDialogs("You are not logged In! please log in to continue")
      return;
   }
   if (this.commentForm.value == "" || this.commentForm.value ===undefined) {
    this.customDialog.OpenDialogs("Comment can not be empty!")
    return;
 }
    this.user.id = this.userId
    this.comment =  this.commentForm.value
    this.comment.commenterName = this.user
    this.doComment();   
  }
  public doComment() {
    let resp= this.service.doCommentOfPost(this.post.id, this.comment )
    resp.subscribe(data => {
      console.log(data)
      this.response = <Response>data;
      if( this.response.status===false){
        this.customDialog.OpenDialogs(this.response.message)
      }
      else {
        this.commentForm.reset();
        this.isCollapsed = false;
        this.loadComments()
      }
    }, 
    error => this.customDialog.OpenDialogs(error));
  }

  togglePostBar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
