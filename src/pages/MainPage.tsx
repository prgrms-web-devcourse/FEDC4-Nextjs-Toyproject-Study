import React, { useState } from 'react';
import PostContainer from 'components/mainpage/PostContainer';
import Header from 'components/mainpage/Header';
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

  return (
    <div>
      <Header />
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

export default MainPage;
