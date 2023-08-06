import { Input } from 'components/common/Input';
import { FC, useEffect, useState } from 'react';
import Top from '../Top/Top';
import { SmallButton } from '../../../components/common/Button';
import { createComment } from 'api/comment';
import { useMutation } from 'react-query';
import { Button } from 'react-query/types/devtools/styledComponents';
import share from 'assets/img/share.svg';
import heart from 'assets/img/heart.svg';

const Comment = ({ comment, addComment }) => {
  const [commentValue, setCommentValue] = useState('');

  const SendComment = useMutation(createComment, {
    onSuccess: (data) => {
      console.log('data send success');
    },
    onError: (e) => {
      console.log('error~~');
    },
  });

  return (
    <div>
      <div className='flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t'></div>
      <Top />
      <div>
        {comment?.map((comment) => (
          <div className='p-2 m-3' key={comment.commentId}>
            <p>{comment.user.name}</p>
            <p>{comment.comment}</p>
          </div>
        ))}
        <Input
          id={'commentInput'}
          placeHolder={'댓글을 입력해주세요.'}
          disabled={false}
          value={commentValue}
          onChange={(e) => {
            setCommentValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              const newComment = {
                comment: commentValue,
                user: {
                  name: '유저 정보에서 넣어주세요',
                },
                commentId: comment[comment.length - 1].commentId + 1,
                createAt: '',
                updateAt: '',
              };
              addComment(newComment);
              setCommentValue('');
              SendComment.mutate({
                postId: 59,
                comment: newComment.comment,
              });
            }
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
              createAt: '',
              updateAt: '',
            };
            addComment(newComment);
            setCommentValue('');
            SendComment.mutate({
              postId: 59,
              comment: newComment.comment,
            });
          }}
        ></SmallButton>
      </div>
    </div>
  );
};

export default Comment;
