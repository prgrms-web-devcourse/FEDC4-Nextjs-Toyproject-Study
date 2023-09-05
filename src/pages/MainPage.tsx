import React, { useEffect, useState } from 'react';
import PostContainer from 'components/mainpage/PostContainer';
import Modal from 'pages/Modal/Modal';

const MainPage: React.FC = () => {
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
        setState({ postId: null, showModal: true });
        document.body.style.overflow = 'unset';
      }
    };

    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <div>
      <PostContainer handleModalClick={clickModal} />
      {
        <Modal
          modalOption={state}
          closeModal={(event) => {
            if (event.target.id === 'background') {
              setState({ postId: null, showModal: true });
              document.body.style.overflow = 'unset';
            }
          }}
          closeBtnClick={(event) => {
            if (event.target.id === 'closeButton') {
              setState({ ...state, showModal: true });
              document.body.style.overflow = 'unset';
            }
          }}
        />
      }
    </div>
  );
};

export default MainPage;
