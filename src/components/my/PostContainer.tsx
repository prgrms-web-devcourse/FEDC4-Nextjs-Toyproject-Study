import Post from '../mainpage/Post';
import { useEffect, useRef, useState } from 'react';
import { getMyPosts } from 'api/postApi';
import { PostType } from 'interface/index';

interface PostContainerProps {
  handleModalClick: (postId) => void;
}

const PostContainer: React.FC<PostContainerProps> = ({ handleModalClick }) => {
  const endRef = useRef<HTMLDivElement>(null);
  const [datas, setDatas] = useState<PostType[]>([]);

  const fetchData = async () => {
    try {
      const response = await getMyPosts();
      setDatas([...datas, ...response.data]);
    } catch (error) {
      alert(error);
      console.error('Error fetching data.');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='flex flex-col justify-center items-center max-w-[1200px] mx-auto bg-blue-gray-25'>
      <div className='flex flex-wrap justify-center py-14'>
        {datas ? (
          datas.map((post, idx) => (
            <div
              className='p-3'
              id={String(idx)}
              key={post.postId}
              onClick={() => handleModalClick(post)}
            >
              <Post post={post} />
            </div>
          ))
        ) : (
          <div></div>
        )}
      </div>
      <div ref={endRef} />
    </div>
  );
};

export default PostContainer;
