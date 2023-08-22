export interface PostType {
  id: number;
  title: string;
  content: string;
  date: string;
  user: string;
}

// export type Color = {
//   [key: number]: string;
// };

export interface postModalType {
  isLoading: boolean;
  errorMessage: string;
  postData: PostData;
}

interface PostData {
  postId?: number;
  title?: string;
  content?: string;
  templateType?: {
    color: string;
    icon: string;
  };
  isAnonymous?: boolean;
  team?: string;
  createAt?: string;
  updateAt?: string;
  isLike?: boolean;
  user?: {
    name: string;
    nickName: string;
  };
  comment?: Array<{
    commentId: number;
    comment: string;
    createAt: string;
    updateAt: string;
    user: {
      name: string;
    };
  }>;
  likeCount?: number;
}
