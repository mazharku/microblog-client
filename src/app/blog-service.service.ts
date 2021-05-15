import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {
  
  //baseURL: string = "https://microblog-reactive.herokuapp.com"
//baseURL: string = "https://microblog-ap.herokuapp.com"
baseURL: string = "http://localhost:8085"
constructor(private http: HttpClient) { }
public makePost(post: any) {
    return this.http.post(this.baseURL+"/api/posts/",post);
 }
public makeUser(user: any) {
  return this.http.post(this.baseURL+"/api/users/registration",user);
 }
public doLogin(user: any) {
  return this.http.post(this.baseURL+"/api/users/login",user);
 }
public doLogout(user: any) {
  const params = new HttpParams()
  .set('user', user)
  .set('user', user);
  console.log("put hf : " + params)
  return this.http.post(this.baseURL+"/api/users/logout",params);
}

public getAllPost() {
  return this.http.get(this.baseURL+"/api/posts/");
}
public getNumberOfLikes(postid: any) {
  return this.http.get(this.baseURL+"/api/votes/"+postid);
}

public isLikeByCurrentUser(postid: any, user: any) {
  const params = new HttpParams()
  .set('user', user);
  console.log("put hf : " + params)
  return this.http.post(this.baseURL+"/api/votes/"+postid, params);
}

public getCommentsOfPost(postid: any) {
  return this.http.get(this.baseURL+"/api/comments/"+postid);
}

public doCommentOfPost(postid: any, comment: any) {
  return this.http.post(this.baseURL+"/api/comments/"+postid, comment);
}

public updateLike(postid:any, user: any) {
  const params = new HttpParams()
  .set('user', user);
  var res = this.http.put(this.baseURL+"/api/votes/" + postid, "params");
  console.log(res)
  return res;
}
public getUserPosts(userId: any) {
  return this.http.get(this.baseURL+"/api/posts/user/"+userId );
}

}
