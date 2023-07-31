import { PostType, Color } from '../../interface/post';

interface PostProps {
  post: PostType;
}

const backgroundColors: Color = {
  0: 'bg-[#ffcac8]',
  1: 'bg-[#fbd0f5]',
  2: 'bg-[#b8b5ff]',
  3: 'bg-[#94daff]',
  4: 'bg-[#c7f5fe]',
  5: 'bg-[#a3f7bf]',
  6: 'bg-[#deff8b]',
  7: 'bg-[#f3f798]',
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
