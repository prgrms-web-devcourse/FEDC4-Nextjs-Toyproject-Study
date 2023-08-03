import { PostType, Color } from 'interface/post';
import React, { useState } from 'react';
import Modal from 'pages/Modal/Modal';

interface PostProps {
  post: PostType;
}

const backgroundColors: Color = {
  0: 'bg-yellow-200',
  1: 'bg-red-200',
  2: 'bg-blue-200',
  3: 'bg-green-200',
};

const Post: React.FC<PostProps> = ({ post }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleModalToggle = () => {
    if (showModal === false) setShowModal(true);
    else return;
  };

  return (
    <div
      className={`${
        backgroundColors[post.id % 4]
      } shadow-md h-80 w-64 rounded p-5 m-auto`}
      onClick={handleModalToggle}
    >
      {showModal ? (
        <div>
          <Modal postId={post.id} />
        </div>
      ) : (
        <div>.</div>
      )}
      <h2 className='text-x1 font-bold mb-5 text-center'>{post.title}</h2>
      <p className='mb-10 h-36'>{post.content}</p>
      <h4 className='font-semibold text-right'>{post.user}</h4>
      <h5 className='font-medium text-right'>{post.date}</h5>
    </div>
  );
};

export default Post;
