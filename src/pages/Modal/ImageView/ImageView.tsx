import { FC, useEffect } from 'react';
import { Post } from 'interface';

interface ImageViewProps {
  post: Post;
}
const ImageView: FC<ImageViewProps> = ({ post }) => {
  return (
    <div>
      <h2 className='text-x1 font-bold mb-5 text-center'>{post.title}</h2>
      <p className='mb-10 h-36'>{post.content}</p>
      <h4 className='font-semibold text-right'>{post.user?.name}</h4>
      <h5 className='font-medium text-right'>{post.updatedAt}</h5>
    </div>
  );
};

export default ImageView;
