export interface PostType {
  id: number;
  title: string;
  content: string;
  date: string;
  user: string;
}

export type Color = {
  [key: number]: string;
};

export interface postModalType {
  isLoading: boolean;
  errorMessage: string;
  postData: PostData;
}

interface PostData {
  postId?: number;
  title?: string;
  content?: string;
  createAt?: string;
  isAnonymous?: string;
  likeCount?: string;
  team?: string;
  isLike?: boolean;
  templateType?: {
    color: string;
    icon: string;
  };
  updateAt?: string;
  comment?: Array<{
    commentId: number;
    comment: string;
    createAt: string;
    updateAt: string;
    user: {
      name: string;
    };
  }>;
  user?: {
    name: string;
  };
}
