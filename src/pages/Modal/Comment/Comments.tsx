import { Input } from 'components/common/Input';
import { FC, useEffect, useState } from 'react';
import { PostData } from 'interface/comment';
import Top from '../Top/Top';
import { SmallButton } from '../../../components/common/Button';
import { postModalType } from '../../../interface/post';

// interface CommentProps {
//   post: PostData;
// }

const Comment = ({ comment, addComment }) => {
  const [commentValue, setCommentValue] = useState('');

  return (
    <div>
      <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'></div>
      <Top />
      <div>
        {comment?.map((comment) => (
          <div className='p-2 m-3' key={comment.commentId}>
            <p>{comment.user.name}</p>
            <p>{comment.comment}</p>s
          </div>
        ))}
        <Input
          id={'commentInput'}
          placeHolder={'댓글을 입력해주세요.'}
          disabled={false}
          onChange={(e) => {
            setCommentValue(e.target.value);
          }}
        />
        <SmallButton
          text={'게시'}
          onClick={() => {
            const newComment = {
              comment: commentValue,
              user: {
                name: '유저 정보에서 넣어주세요',
              },
              commentId: comment[comment.length - 1].commentId + 1,
            };
            addComment(newComment);
          }}
        ></SmallButton>
      </div>
    </div>
  );
};

export default Comment;
