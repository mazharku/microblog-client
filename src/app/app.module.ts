import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BlogServiceService } from './blog-service.service';
import { RegistrationComponent } from './registration/registration.component';
import { PostModelComponent } from './post-model/post-model.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog'
import { CustomDialogComponent } from './custom-dialog/custom-dialog.component';
import { SingleUserPostsComponent } from './single-user-posts/single-user-posts.component'


@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    PostModelComponent,
    CustomDialogComponent,
    SingleUserPostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
