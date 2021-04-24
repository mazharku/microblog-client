import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';

@Component({
  selector: 'app-single-user-posts',
  templateUrl: './single-user-posts.component.html',
  styleUrls: ['./single-user-posts.component.css']
})
export class SingleUserPostsComponent implements OnInit {
  userId: String | undefined;
  posts: any;
  constructor(private route: ActivatedRoute,private service: BlogServiceService, private router: Router) { }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['user'];
    this.getData();
  }

  getData() {
    let resp= this.service.getUserPosts(this.userId)
    resp.subscribe((res)=>this.posts=res);
  }
}
