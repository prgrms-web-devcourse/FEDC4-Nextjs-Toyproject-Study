import { FC, useState, useEffect } from 'react';
import ImageView from './ImageView/ImageView';
import Comment from './Comment/Comments';
import { getPostDetail } from 'api/postApi';
import { postModalType, PostType } from 'interface/post';

interface ModalProps {
  modalOption: {
    postId?: number | null;
  };
  closeModal: (event) => void;
}

const Modal = ({ modalOption, closeModal }: ModalProps) => {
  const { postId } = modalOption;
  const initialState = {
    isLoading: true,
    errorMessage: '',
    postData: {},
  };
  const [state, setState] = useState<postModalType>(initialState);
  const closeModalForReal = (e) => {
    if (e.target.id === 'background') {
      closeModal(e);
      setState({ ...initialState });
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (postId !== null) {
          const response = await getPostDetail({ postId: postId });
          setState({ ...state, postData: response.data, isLoading: false });
        }
      } catch (error) {
        alert(error);
        setState({ ...state, errorMessage: 'Error fetching data:' });
        setState({ ...state, isLoading: true });
      }
    };
    setTimeout(() => {
      fetchData();
    }, 2000);
  }, [postId]);
  if (state.isLoading) {
    return (
      <div
        id={`background`}
        className={`fixed left-0 top-0 w-screen h-screen z-[250] bg-[rgba(0,0,0,0.5)] 
        `}
        onClick={closeModalForReal}
      >
        <div
          className={`absolute left-1/2 top-1/2 text-center z-10 translate-y-[-50%] translate-x-[-50%]`}
        >
          <div
            className={`bg-blue-gray-10 w-[1080px] shadow-card-1 h-[720px] flex flex-row border border-solid border-blue-gray-800 justify-center items-center`}
          >
            <>
              <div className='bg-white rounded-lg p-4'>
                <div className='animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500 border-opacity-75 mx-auto'></div>
                <p className='mt-2'>Loading...</p>
              </div>
            </>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        id={`background`}
        className={`fixed left-0 top-0 w-screen h-screen z-[250] bg-[rgba(0,0,0,0.5)] 
        `}
        onClick={closeModalForReal}
      >
        <div
          className={`absolute left-1/2 top-1/2 text-center z-10 translate-y-[-50%] translate-x-[-50%]`}
        >
          <div
            className={`bg-blue-gray-10 w-[1080px] shadow-card-1 h-[720px] flex flex-row border border-solid border-blue-gray-800 justify-center items-center`}
          >
            <>
              <ImageView postData={state.postData} />
              <Comment
                likeCount={state.postData.likeCount}
                postId={state.postData.postId}
                isLike={state.postData.isLike}
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
              />
            </>
          </div>
        </div>
      </div>
    );
  }
};

export default Modal;
