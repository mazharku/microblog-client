import { BlogUser } from "./BlogUser";
import { BlogPost } from "./BlogPost";

export class Vote {
        voteId: String | undefined ;
	post: BlogPost = new BlogPost; 
        Voter: BlogUser = new BlogUser;
        vote: boolean= true
}