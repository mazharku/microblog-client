import { Component, OnInit } from '@angular/core';
import { BlogServiceService } from '../blog-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import { BlogPost } from '../model/BlogPost';
import { FormBuilder } from '@angular/forms';
import { BlogUser } from '../model/BlogUser';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent  {
 
  post: BlogPost= new BlogPost();
  user: BlogUser = new BlogUser();
  checkoutForm = this.formBuilder.group({
    title: '',
    post: ''
  });
  constructor(private route: ActivatedRoute, private service: BlogServiceService,private formBuilder: FormBuilder,private router: Router) { }

  onSubmit() {
    this.user.id = "a9cd9626-fe08-402b-adf0-d60bb7a8fb36"
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
      console.log(data)
      this.gotoList();
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }

}
