import { BlogUser } from "./BlogUser";
import { BlogComment } from "./BlogComment";
import { Vote } from "./Vote";
export class BlogPost {
     
        id: String | undefined ;
	title!: String ;
	post: String = "Default";
        user: BlogUser = new BlogUser;
        comments: BlogComment[] = [];
        votes: Vote[] = [];
   
}