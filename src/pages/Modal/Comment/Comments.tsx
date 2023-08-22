import { Input } from 'components/common/Input';
import { useCallback, useState } from 'react';
import { createComment } from 'api/comment';
import { useMutation } from 'react-query';
import share from 'assets/img/share.svg';
import heart from 'assets/img/heart.svg';
import heartFill from 'assets/img/heart-fill.svg';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { likeToggle, forgive } from '../../../api/postApi';
import { SmallButton } from 'components/common/Button';
import App from '../../../App';

const Comment = ({
  likeCount,
  postId,
  comment,
  addComment,
  isLike,
  isForgive,
  forgiveCount,
  clickLike,
  clickForgive,
}) => {
  const [commentValue, setCommentValue] = useState(isForgive);
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

  const clickForgiveBtn = useMutation(forgive, {
    onSuccess: (data) => {
      alert('용서하였습니다.');
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
        className={`h-[56px] w-full flex flex-row justify-between items-center px-3 py-1.5 border-b border-solid border-blue-gray-800`}
      >
        <span className={`text-subtitle-1`}>좋아요 {likeCount}개</span>
        <img
          className={`w-[36px] h-[36px] justify-center items-center cursor-pointer invisible`}
          src={share}
        />
        <div className='flex flex-row gap-3'>
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
                alert('"좋아요"는 로그인시 사용 가능합니다.');
              }
            }}
          />
          {isForgive ? (
            <SmallButton text='용서됨' disabled={true} />
          ) : (
            <SmallButton
              text='용서하기'
              onClick={() => {
                if (state.isLogin) {
                  clickForgiveBtn.mutate({
                    postId: postId,
                  });
                  clickForgive(true, forgiveCount + 1);
                } else {
                  alert('"용서하기"는 로그인시 사용 가능합니다.');
                }
              }}
            />
          )}
        </div>
      </div>
      <div className={`w-full h-[580px] overflow-y-scroll`}>
        {comment?.map((comment, index) => (
          <div
            className='flex flex-col m-3 px-4 py-2 bg-blue-gray-50 '
            key={index}
          >
            <span className={`text-left font-bold text-subtitle-1`}>
              {comment.user.name}
            </span>
            <span className={`text-left text-body-2`}>{comment.comment}</span>
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
