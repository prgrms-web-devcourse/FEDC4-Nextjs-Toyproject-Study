export type PostType = {
  postId: number;
  user: { name: string };
  title: string;
  content: string;
  templateType?: string;
  isAnonymous?: boolean;
  createAt?: string;
  updateAt?: string;
  team?: string;
};
export type Color = {
  [key: number]: string;
};
