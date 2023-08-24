import React, { useState } from 'react';
import PostContainer from 'components/mainpage/PostContainer';
import Modal from 'pages/Modal/Modal';

const MainPage: React.FC = () => {
  const initialState = {
    postId: null,
    showModal: false,
  };
  const [state, setState] = useState(initialState);

  const clickModal = ({ postId }) => {
    setState({ postId: postId, showModal: !state.showModal });
    document.body.style.overflow = 'hidden';
  };
  return (
    <div>
      <PostContainer handleModalClick={clickModal} />
      {state.showModal && (
        <Modal
          modalOption={state}
          closeModal={(event) => {
            if (event.target.id === 'background') {
              setState({ ...state, showModal: false });
              document.body.style.overflow = 'unset';
            }
          }}
        />
      )}
    </div>
  );
};

export default MainPage;
