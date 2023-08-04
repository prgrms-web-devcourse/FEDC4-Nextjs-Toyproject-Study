import PostContainer from './PostContainer';
import Header from './Header';
import Modal from '../Modal/Modal';
import React, { useState } from 'react';
import { postModalType } from '../../interface/post';

const MainPage: React.FC = () => {
  const [modalFlag, setModalFlag] = useState(false);

  return (
    <div>
      <Header />
      <PostContainer />
      <Modal postId={59} modalFlag={modalFlag} />
    </div>
  );
};

export default MainPage;
