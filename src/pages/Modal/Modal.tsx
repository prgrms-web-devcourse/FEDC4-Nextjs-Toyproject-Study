import React, { FC, useState, useEffect } from 'react';
import ImageView from './ImageView/ImageView';
import Comment from './Comment/Comments';
import { getPostDetail } from 'api/postApi';
import { postModalType, PostType } from 'interface/post';

interface ModalProps {
  postId: number;
  modalFlag: boolean;
}

const Modal: FC<ModalProps> = ({ postId, modalFlag }) => {
  const initialState = {
    isLoading: false,
    errorMessage: '',
    postData: {},
  };
  const [state, setState] = useState<postModalType>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostDetail({ postId: 59 });
        setState({ ...state, postData: response.data });
      } catch (error) {
        alert(error);
        console.error('Error fetching data:', error);
        setState({ ...state, errorMessage: 'Error fetching data:' });
        setState({ ...state, isLoading: true });
      }
    };

    fetchData();
  }, []);

  if (state.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${
        modalFlag ? 'hidden' : ''
      }`}
    >
      <div
        className={`absolute left-1/2 top-1/2 text-center z-10 translate-y-[-50%] translate-x-[-50%]`}
      >
        <div
          className={`bg-blue-gray-10 w-[1080px] h-[720px] flex flex-row border border-solid border-blue-gray-800 justify-center items-center`}
        >
          {state.postData && (
            <>
              <ImageView postData={state.postData} />
              <Comment
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
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Modal;
