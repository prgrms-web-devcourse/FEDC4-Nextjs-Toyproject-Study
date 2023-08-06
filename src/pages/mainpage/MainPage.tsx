import React, { useState } from 'react';
import PostContainer from './PostContainer';
import Header from './Header';
import Modal from 'pages/Modal/Modal';

const MainPage: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(true);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <Header />
      <PostContainer handleModalToggle={toggleModal} />
      {<Modal postId={59} modalFlag={showModal} />}
    </div>
  );
};

export default MainPage;
