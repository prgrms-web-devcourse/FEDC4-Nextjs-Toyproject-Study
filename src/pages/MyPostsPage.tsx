import React, { useEffect, useState } from 'react';
import PostContainer from '../components/my/PostContainer';
import Modal from './Modal/Modal';
import HeadingText from '../components/common/HeadingText';

const MyPostsPage = () => {
  const initialState = {
    postId: null,
    showModal: true,
  };
  const [state, setState] = useState(initialState);

  const clickModal = ({ postId }) => {
    setState({ postId: postId, showModal: !state.showModal });
    document.body.style.overflow = 'hidden';
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setState({ ...state, showModal: true });
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div className='pt-24'>
      <HeadingText text='내 반성문' />
      <PostContainer handleModalClick={clickModal} />
      {
        <Modal
          modalOption={state}
          closeModal={(event) => {
            if (event.target.id === 'background') {
              setState({ ...state, showModal: true });
              document.body.style.overflow = 'unset';
            }
          }}
        />
      }
    </div>
  );
};

export default MyPostsPage;
