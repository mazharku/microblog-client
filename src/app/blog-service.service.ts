import { Injectable } from '@angular/core';
import { HttpClient,HttpParams  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogServiceService {

constructor(private http: HttpClient) { }
public makePost(post: any) {
    return this.http.post("http://localhost:8082/api/posts/",post);
 }
public makeUser(user: any) {
  return this.http.post("http://localhost:8082/api/users/registration",user);
 }
public doLogin(user: any) {
  return this.http.post("http://localhost:8082/api/users/login",user);
 }
public doLogout(user: any) {
  const params = new HttpParams()
  .set('user', user);
  return this.http.post("http://localhost:8082/api/users/logout",params);
}

public getAllPost() {
  return this.http.get("http://192.168.0.104:8082/api/posts/");
}
public getNumberOfLikes(postid: any) {
  return this.http.get("http://192.168.0.104:8082/api/votes/"+postid);
}

public isLikeByCurrentUser(postid: any, user: any) {
  const params = new HttpParams()
  .set('user', user);
  return this.http.post("http://192.168.0.104:8082/api/votes/"+postid, params);
}

public getCommentsOfPost(postid: any) {
  return this.http.get("http://192.168.0.104:8082/api/comments/"+postid);
}

public doCommentOfPost(postid: any, comment: any) {
  return this.http.post("http://192.168.0.104:8082/api/comments/"+postid, comment);
}

public updateLike(postid:any, user: any) {
  const params = new HttpParams()
  .set('user', user);
  return this.http.put("http://192.168.0.104:8082/api/votes/" + postid, params );
}
public getUserPosts(userId: any) {
  return this.http.get("http://192.168.0.104:8082/api/posts/user/"+userId );
}

}
