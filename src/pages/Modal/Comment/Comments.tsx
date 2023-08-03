import Input from './Input';
import { FC } from 'react';
import { PostData } from 'interface/comment';
import Top from '../Top/Top';

interface CommentProps {
  post: PostData;
}

const Comment: FC<CommentProps> = ({ post }) => {
  return (
    <div>
      <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'></div>
      <Top />
      <div>
        {post.comment.map((comment) => (
          <div className='p-2 m-3' key={comment.commentId}>
            <p>작성자: {comment.user.name}</p>
            <p>댓글: {comment.comment}</p>s
          </div>
        ))}
        <Input />
      </div>
    </div>
  );
};

export default Comment;
