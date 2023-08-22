import { PostType } from 'interface/index';

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const template = post.templateType
    ? JSON.parse(post.templateType.replace(/'/g, '"'))
    : {};

  return (
    <div
      className='relative  p-5 m-auto w-[268px] h-[386px] cursor-pointer hover:shadow-[4px_4px_0px_0px_rgba(20,32,41,1)] hover:scale-105'
      style={{ backgroundColor: template?.color }}
    >
      <div className='text-heading-3 line-clamp-[1] overflow-hidden mb-5 text-center'>
        {post.title}
      </div>
      <div className='text-body-2 h-[200px] whitespace-pre-line whitespace-nowrap break-all line-clamp-[10]'>
        {post.content}
      </div>
      <div className='absolute right-[20px] bottom-[16px] flex flex-col'>
        <span className='text-heading-6 text-right'>
          {post.createAt?.slice(0, 10).split('-').join('.')}
        </span>
        <span className='text-heading-4 text-right'>{post.user.name}</span>
      </div>
      {template.icon && (
        <img
          className='absolute left-[20px] bottom-[16px]'
          src={template.icon}
          alt=''
          width={80}
          height={80}
        ></img>
      )}
    </div>
  );
};

export default Post;
