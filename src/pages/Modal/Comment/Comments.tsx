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
      className={`flex flex-col w-[570px] h-[720px] items-start justify-between border border-solid border-blue-gray-800 rounded-t`}
    >
      <div
        className={`h-[56px] w-full flex flex-row justify-center border border-solid border-blue-gray-800 border-b`}
      >
        <img
          className={`w-[36px] h-[36px] justify-center items-center cursor-pointer`}
          src={share}
        />
        <img
          className={`w-[32px] h-[32px] cursor-pointer justify-end`}
          src={heart}
        />
      </div>
      <div className={`w-full h-full`}>
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
      </div>
      <div className={`w-[530px] pb-5 px-5 flex flex-row mb-2`}>
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
        <button
          className={`w-[56px] ml-1 h-10 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-4 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)]`}
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
        >
          게시
        </button>
      </div>
    </div>
  );
};

export default Comment;
