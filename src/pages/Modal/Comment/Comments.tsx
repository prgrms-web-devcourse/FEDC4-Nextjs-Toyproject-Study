import { Input } from 'components/common/Input';
import { FC, useEffect, useState } from 'react';
import Top from '../Top/Top';
import { SmallButton } from '../../../components/common/Button';
import { createComment } from 'api/comment';
import { useMutation } from 'react-query';

const Comment = ({ comment, addComment }) => {
  const [commentValue, setCommentValue] = useState('');

  const mutation = useMutation(createComment, {
    onSuccess: (data) => {
      console.log('data send success');
    },
    onError: (e) => {
      console.log('error~~');
    },
  });

  return (
    <div
      className={`flex w-[570px] h-[720px] items-start justify-between p-5 border border-solid border-blue-gray-800 rounded-t`}
    >
      <div className=''>
        <div>
          {comment?.map((comment) => (
            <div
              className='flex flex-col p-2 m-3 bg-blue-gray-50 overflow-y-scroll'
              key={comment.commentId}
            >
              <span className={`text-left font-bold text-heading-5`}>
                {comment.user.name}
              </span>
              <span className={`text-left text-heading-5`}>
                {comment.comment}
              </span>
            </div>
          ))}
          <div className={`w-[530px] flex flex-row`}>
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
                  mutation.mutate({
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
                mutation.mutate({
                  postId: 59,
                  comment: newComment.comment,
                });
              }}
            ></SmallButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
