import { BlogUser } from "./BlogUser";
import { BlogPost } from "./BlogPost";


export class BlogComment {
     
    id: String | undefined ;
    comment: String | undefined;
    commenterName: BlogUser = new BlogUser;
    post: BlogPost = new BlogPost;
      
   
}