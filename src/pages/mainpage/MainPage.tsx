import PostContainer from './PostContainer';
import Header from './Header';
import Modal from 'pages/Modal/Modal';
import React, { useState } from 'react';
const MainPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleModalToggle = () => {
    setShowModal((showModal) => !showModal);
  };
  const handleClick = (e) => {
    e.stopPropagation();
    alert('Wrapper got clicked!!');
  };
  return (
    <div>
      {showModal ? (
        <div>
          <Modal postId={59} />
        </div>
      ) : null}
      <div onClick={handleClick}>
        <Header />
        <PostContainer handleModalToggle={handleModalToggle} />
      </div>
    </div>
  );
};

export default MainPage;
