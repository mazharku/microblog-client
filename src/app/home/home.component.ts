import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServiceService } from '../blog-service.service';
import { BlogUser } from '../model/BlogUser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {
  value: string = localStorage.getItem("userName")  || '';
  name: string = this.value.replace("\"",'').replace("\"", '')
  IdValue: string = localStorage.getItem("userId")  || '';
  userId: string = this.IdValue.replace("\"",'').replace("\"", '')
  user: BlogUser = new BlogUser()
  posts: any;
  constructor(private service: BlogServiceService, private router: Router) { }
  ngOnInit(): void {
    this.getData();
  }
  
  getData() {
    let resp= this.service.getAllPost();
    resp.subscribe((res)=>this.posts=res);
  }
  doLogOut(){
    this.user.id= this.userId
    let resp= this.service.doLogout(this.userId);
    resp.subscribe(data => {
     
     console.log(data)
      if(data===true){
        console.log("if block")
        localStorage.setItem("userName", "")
        localStorage.setItem("userId", "")
        window.location.reload();
      }
      else {
        console.log("else block")
      }
     
    }, 
    error => console.log(error));
  }
  gotoList() {
    this.router.navigate(['']);
  }
}
