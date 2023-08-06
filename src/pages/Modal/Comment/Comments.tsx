import { Input } from 'components/common/Input';
import { FC, useCallback, useEffect, useState } from 'react';
import Top from '../Top/Top';
import { SmallButton } from '../../../components/common/Button';
import { createComment } from 'api/comment';
import { useMutation } from 'react-query';
import { Button } from 'react-query/types/devtools/styledComponents';
import share from 'assets/img/share.svg';
import heart from 'assets/img/heart.svg';
import heartFill from 'assets/img/heart-fill.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { useLocation } from 'react-router-dom';
import { likeToggle } from '../../../api/postApi';

const Comment = ({ postId, comment, addComment, isLike, clickLike }) => {
  const [commentValue, setCommentValue] = useState('');
  const auth = useSelector((state: RootState) => state.auth);
  const initialState = {
    isLogin: auth.isLogin,
    commentValue: '',
  };
  const [state, setState] = useState(initialState);

  const sendComment = useMutation(createComment, {
    onSuccess: (data) => {
      console.log('data send success');
    },
    onError: (e) => {
      console.log('error~~');
    },
  });
  const clickLime = useMutation(likeToggle, {
    onSuccess: (data) => {
      alert(data.message);
    },
  });

  const viewComment = () => {
    if (commentValue.length > 0) {
      const newComment = {
        comment: commentValue,
        user: {
          name: auth.user.name,
        },
      };
      setCommentValue('');
      addComment(newComment);
      sendComment.mutate({
        postId: postId,
        comment: newComment.comment,
      });
    }
  };
  const throttle = (callback, delay) => {
    let lastCall = 0;
    return (...args) => {
      const now = new Date().getTime();
      if (now - lastCall < delay) return;
      lastCall = now;
      return callback.apply(this, args);
    };
  };

  const throttledViewComment = useCallback(throttle(viewComment, 500), [
    commentValue,
  ]);

  return (
    <div
      className={`flex flex-col w-1/2 h-[720px] items-start justify-between border-l border-solid border-blue-gray-800 rounded-t`}
    >
      <div
        className={`h-[56px] w-full flex flex-row justify-between items-center px-2 border-b border-solid border-blue-gray-800`}
      >
        <img
          className={`w-[36px] h-[36px] justify-center items-center cursor-pointer invisible`}
          src={share}
        />
        <img
          className={`w-[32px] h-[32px] cursor-pointer justify-end`}
          src={isLike ? heartFill : heart}
          onClick={() => {
            if (state.isLogin) {
              clickLime.mutate({
                postId: postId,
              });
              clickLike(!isLike);
            } else {
              alert('좋아요는 로그인시 사용 가능합니다.');
            }
          }}
        />
      </div>
      <div className={`w-full h-[580px] overflow-y-scroll`}>
        {comment?.map((comment, index) => (
          <div className='flex flex-col p-2 m-3 bg-blue-gray-50 ' key={index}>
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
          disabled={!state.isLogin}
          value={commentValue}
          onChange={(e) => {
            setCommentValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key == 'Enter') {
              if (e.nativeEvent.isComposing) return;
              throttledViewComment();
            }
          }}
        />
        <button
          disabled={!state.isLogin}
          className={`w-[56px] ml-1 h-10 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-4 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)]`}
          onClick={throttledViewComment}
        >
          게시
        </button>
      </div>
    </div>
  );
};

export default Comment;
