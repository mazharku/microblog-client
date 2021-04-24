import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreatePostComponent} from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { SingleUserPostsComponent } from './single-user-posts/single-user-posts.component'
const routes: Routes = [
  { path: '', redirectTo:"home",pathMatch:"full"},
  { path: 'home', component: HomeComponent},
  { path: 'add', component: CreatePostComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegistrationComponent},
  {path: 'posts/:user', component: SingleUserPostsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
