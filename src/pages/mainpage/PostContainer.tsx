import Post from './Post';
import { DUMMY_DATA } from './DummyData';
import { useEffect, useRef, useState } from 'react';

const PostContainer: React.FC = () => {
  const totalCount = DUMMY_DATA.length;
  const start = 0;
  const limit = 12;
  const endRef = useRef<HTMLDivElement>(null);
  const [end, setEnd] = useState<number>(limit);

  const showData = DUMMY_DATA.slice(start, end);

  const handleInfiniteScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && showData.length < totalCount) {
        observer.unobserve(entry.target);
        setEnd(end + limit > totalCount ? totalCount : end + limit);
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
        {showData.map((post, idx) => (
          <div className='p-3 h-96' id={String(idx)} key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
      <div id={String(end)} ref={endRef} />
    </div>
  );
};

export default PostContainer;
