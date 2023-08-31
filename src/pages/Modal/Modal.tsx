import React, { FC, useState, useEffect } from 'react';
import ImageView from './ImageView/ImageView';
import Comment from './Comment/Comments';
import { getPostDetail } from 'api/postApi';
import { postModalType, PostType } from 'interface/post';
import Loding from '../../components/common/Loding';

interface ModalProps {
  modalOption: {
    postId?: number | null;
    showModal: boolean;
  };
  closeModal: (event) => void;
}

const Modal: FC<ModalProps> = ({ modalOption, closeModal }) => {
  const { postId, showModal } = modalOption;
  const initialState = {
    isLoading: false,
    errorMessage: '',
    postData: {},
  };
  const [state, setState] = useState<postModalType>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (postId !== null) {
          setState({ ...state, isLoading: true });
          const response = await getPostDetail({ postId: postId });
          setState({ ...state, isLoading: false });
          setState({ ...state, postData: response.data });
        } else {
          setState({ ...state, postData: {} });
        }
      } catch (error) {
        alert(error);
        setState({ ...state, errorMessage: 'Error fetching data:' });
        setState({ ...state, isLoading: true });
      }
    };
    fetchData();
  }, [postId]);

  // if (state.isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div
      id={`background`}
      className={`fixed left-0 top-0 w-screen h-screen z-[250] bg-[rgba(0,0,0,0.5)] ${
        showModal ? 'hidden' : ''
      }`}
      onClick={closeModal}
    >
      <Loding isLoding={state.isLoading} />
      <div
        className={`absolute left-1/2 top-1/2 text-center z-10 translate-y-[-50%] translate-x-[-50%] ${
          showModal ? 'hidden' : ''
        }`}
      >
        <div
          className={`bg-blue-gray-10 w-[1080px] shadow-card-1 h-[720px] flex flex-row border border-solid border-blue-gray-800 justify-center items-center`}
        >
          {state.postData && (
            <>
              <ImageView postData={state.postData} />
              <Comment
                likeCount={state.postData.likeCount}
                postId={state.postData.postId}
                isLike={state.postData.isLike}
                isForgive={state.postData.isForgive}
                forgiveCount={state.postData.forgiveCount}
                comment={state.postData.comment}
                addComment={(newComment) => {
                  const updatedState = { ...state };
                  if (updatedState.postData.comment) {
                    updatedState.postData.comment = [
                      ...updatedState.postData.comment,
                      newComment,
                    ];
                  }
                  setState(updatedState);
                }}
                clickLike={(isLike) => {
                  const updatedState = { ...state };
                  updatedState.postData.isLike = isLike;
                  if (updatedState.postData.isLike) {
                    updatedState.postData.likeCount =
                      (updatedState.postData.likeCount || 0) + 1;
                  } else {
                    if (
                      updatedState.postData.likeCount &&
                      updatedState.postData.likeCount !== 0
                    ) {
                      updatedState.postData.likeCount -= 1;
                    }
                  }
                  setState(updatedState);
                }}
                clickForgive={(isForgive, forgiveCount) => {
                  const updatedState = { ...state };
                  updatedState.postData.isForgive = isForgive;
                  updatedState.postData.forgiveCount = forgiveCount;
                  setState(updatedState);
                }}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
