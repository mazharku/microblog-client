import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { BlogComment } from '../model/BlogComment';
import { BlogPost } from '../model/BlogPost';
import { BlogUser } from '../model/BlogUser';
import { PostModel } from '../model/PostModel';

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
  constructor(private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { }

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
    let resp= this.service.getNumberOfLikes(this.post.id)
    resp.subscribe((res)=>this.likedByCurrentUser=res);
  }

  loadComments() {
    let resp= this.service.getCommentsOfPost(this.post.id)
    resp.subscribe((res)=>this.comments=res);
  }

  updatelike() {
    console.log(this.post.id + "  h  "+this.userId)
    let resp= this.service.updateLike(this.post.id, this.userId)
    resp.subscribe(data => {
     
     console.log(data)
      if(data===true){
        this.loadLikeCount()
      }
      else {
        console.log("else block")
      }
     
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.user.id = this.userId
    this.comment =  this.commentForm.value
    this.comment.commenterName = this.user
    this.doCreateUser();   
  }
  public doCreateUser() {
    let resp= this.service.doCommentOfPost(this.post.id, this.comment )
    resp.subscribe(data => {
      console.log(data)
      this.loadComments()
    }, 
    error => console.log(error));
  }
}
