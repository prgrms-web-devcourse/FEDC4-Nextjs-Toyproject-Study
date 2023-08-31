export type PostType = {
  postId: number;
  title: string;
  content: string;
  templateType?: string;
  isAnonymous?: boolean;
  team?: string;
  createAt?: string;
  updateAt?: string;
  user: { name: string; nickName: string };
  commentCount: number;
  likeCount: number;
  forgiveCount: number;
};

export type Color = {
  [key: number]: string;
};
