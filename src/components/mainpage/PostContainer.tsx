import Post from './Post';
import { useEffect, useRef, useState } from 'react';
import { getPost } from 'api/postApi';
import { PostType } from 'interface/index';
interface PostContainerProps {
  handleModalClick: (postId) => void;
}

const PostContainer: React.FC<PostContainerProps> = ({ handleModalClick }) => {
  const limit = 12;
  const endRef = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState<number>(1);
  const [datas, setDatas] = useState<PostType[]>([]);

  const fetchData = async () => {
    try {
      const response = await getPost({ pageId: start, limitNumber: limit });
      setDatas([...datas, ...response.data]);
      setStart(start + 1);
    } catch (error) {
      alert(error);
      console.error('Error fetching data.');
    }
  };

  const handleInfiniteScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && datas.length % limit === 0) {
        observer.unobserve(entry.target);
        fetchData();
      }
    });
  };

  useEffect(() => {
    if (!endRef.current) return;

    const observer = new IntersectionObserver(handleInfiniteScroll, {
      threshold: 1.0,
    });
    endRef.current && observer.observe(endRef.current);
  }, [handleInfiniteScroll]);

  return (
    <div className='flex flex-col pl-[18%] pr-[16%] justify-center items-center w-full bg-blue-gray-25'>
      <div className='container flex flex-wrap py-14'>
        {datas ? (
          datas.map((post, idx) => (
            <div
              className='p-3 h-96'
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
