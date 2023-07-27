export type Post = {
  postId?: number;
  user?: { name: string };
  title: string;
  content: string;
  templateType?: string;
  isAnonymous?: boolean;
  createdAt?: string;
  updatedAt?: string;
  team?: string;
};
