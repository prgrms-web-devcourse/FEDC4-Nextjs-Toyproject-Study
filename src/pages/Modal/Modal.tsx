import React, { FC, useState, useEffect } from 'react';
import ImageView from './ImageView/ImageView';
import Comment from './Comment/Comments';
import { getPostDetail } from 'api/postApi';
import { PostData } from 'interface/comment';
import { postModalType, PostType } from 'interface/post';

interface ModalProps {
  postId: number;
}

const Modal: FC<ModalProps> = (postId) => {
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
    <div>
      <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-1 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex flex-row items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
              {state.postData && (
                <>
                  <ImageView postData={state.postData} />
                  <Comment
                    comment={state.postData.comment}
                    addComment={(newComment) => {}}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
