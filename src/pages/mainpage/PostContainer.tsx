import Post from './Post';
import { DUMMY_DATA } from './DummyData';

const PostContainer: React.FC = () => {
  return (
    <div className='flex flex-col pl-[18%] pr-[16%] justify-center items-center w-full bg-blue-gray-25'>
      <div className='container flex flex-wrap py-14'>
        {DUMMY_DATA.map((post) => (
          <div className='p-3 h-96' key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContainer;
