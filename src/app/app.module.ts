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

@NgModule({
  declarations: [
    AppComponent,
    CreatePostComponent,
    HomeComponent,
    LoginComponent,
    RegistrationComponent,
    PostModelComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    AppRoutingModule
  ],
  providers: [BlogServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
