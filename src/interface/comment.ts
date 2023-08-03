export interface CommentData {
  commentId: number;
  comment: string;
  createAt: string;
  updateAt: string;
  user: {
    name: string,
  };
}

export interface UserData {
  name: string;
}

export interface PostData {
  postId: number;
  title: string;
  content: string;
  templateType: string;
  isAnonymous: boolean;
  user: UserData;
  createAt: string;
  updateAt: string;
  comment: CommentData[];
  like: number;
}

export interface PostDetailsProps {
  post: PostData;
}
