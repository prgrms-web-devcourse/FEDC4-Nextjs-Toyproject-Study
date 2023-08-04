import { PostType, Color } from '../../interface/post';

interface PostProps {
  post: PostType;
}

const backgroundColors: Color = {
  0: 'bg-template-red',
  1: 'bg-template-pink',
  2: 'bg-template-purple',
  3: 'bg-template-blue',
  4: 'bg-template-sky',
  5: 'bg-template-green',
  6: 'bg-template-lime',
  7: 'bg-template-yellow',
};

const Post: React.FC<PostProps> = ({ post }) => {
  return (
    <div
      className={`${
        backgroundColors[post.id % 8]
      } bg-yellow-100 shadow-md w-64 rounded p-5 m-auto`}
    >
      <div className='text-heading-3 line-clamp-[1] overflow-hidden mb-5 text-center'>
        {post.title}
      </div>
      <div className='text-body-2 w-52 h-[200px] line-clamp-[10] overflow-hidden mb-10'>
        {post.content}
      </div>
      <div className='text-heading-6  text-right'>{post.date}</div>
      <div className='text-heading-4 text-right'>{post.user}</div>
    </div>
  );
};

export default Post;
