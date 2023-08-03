import React, { FC, useState, useEffect } from 'react';
import ImageView from './ImageView/ImageView';
import Comment from './Comment/Comments';
import { getPostDetail } from 'api/postApi';
import { PostData } from 'interface/comment';
import { PostType } from 'interface/post';

interface ModalProps {
  post: PostType;
}

const Modal: FC<ModalProps> = ({ post }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [postData, setPostData] = useState<PostData | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getPostDetail({ postId: 59 });
        setPostData(response.data);
        setLoading(false);
      } catch (error) {
        alert(error);
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <div className='flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-1 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
            <div className='flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b'>
              {postData && (
                <>
                  <ImageView post={postData} />
                  <Comment post={postData} />
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
