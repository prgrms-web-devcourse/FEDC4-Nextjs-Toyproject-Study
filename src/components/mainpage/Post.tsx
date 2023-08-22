import { PostType } from 'interface/index';
import './PostContainer';

interface PostProps {
  post: PostType;
}

const template = {
  red: '#FFCAC8',
  pink: '#FBD0F5',
  purple: '#B8B5FF',
  blue: '#94DAFF',
  sky: '#C7F5FE',
  green: '#A3F7BF',
  lime: '#DEFF8B',
  yellow: '#F3F798',
};

const Post: React.FC<PostProps> = ({ post }) => {
  const template = post.templateType
    ? JSON.parse(post.templateType.replace(/'/g, '"'))
    : {};

  const postStyle = {
    backgroundColor: template?.color,
  };

  return (
    <div
      className={`relative m-auto w-[268px] h-[386px] p-5 hover:shadow-[4px_4px_0px_0px_rgba(20,32,41,1)] hover:scale-105 `}
      style={{ backgroundColor: template?.color }}
    >
      <div className='group/item absolute top-0 left-0 h-full w-full cursor-pointer flex justify-center items-center hover:bg-[#000000]/[.3] '>
        <div className='invisible absolute flex flex-row gap-4 group-hover/item:visible'>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <path
                d='M9.12478 16.048L9.12406 16.0474C6.96801 14.1296 5.21946 12.5732 4.00389 11.1154C2.79375 9.66413 2.16675 8.37346 2.16675 6.99591C2.16675 4.76338 3.95044 3 6.25008 3C7.55225 3 8.80718 3.59704 9.62251 4.53623L10.0001 4.97116L10.3777 4.53623C11.193 3.59704 12.4479 3 13.7501 3C16.0497 3 17.8334 4.76338 17.8334 6.99591C17.8334 8.37347 17.2064 9.66416 15.9962 11.1166C14.7815 12.5742 13.0349 14.1312 10.8813 16.0509L10.8768 16.055L10.8757 16.0559L10.0013 16.8308L9.12478 16.048Z'
                fill='white'
                stroke='white'
              />
            </svg>
            <div className='text-subtitle-1 text-white'>{post.likeCount}</div>
          </div>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
            >
              <mask id='path-1-inside-1_503_595' fill='white'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M18.3334 9.16667C18.3334 12.8486 14.6025 15.8333 10.0001 15.8333C9.07487 15.8333 8.18487 15.7127 7.35332 15.49L3.33341 17.5L3.87777 13.6895C2.50532 12.5011 1.66675 10.9122 1.66675 9.16667C1.66675 5.48477 5.39771 2.5 10.0001 2.5C14.6025 2.5 18.3334 5.48477 18.3334 9.16667Z'
                />
              </mask>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M18.3334 9.16667C18.3334 12.8486 14.6025 15.8333 10.0001 15.8333C9.07487 15.8333 8.18487 15.7127 7.35332 15.49L3.33341 17.5L3.87777 13.6895C2.50532 12.5011 1.66675 10.9122 1.66675 9.16667C1.66675 5.48477 5.39771 2.5 10.0001 2.5C14.6025 2.5 18.3334 5.48477 18.3334 9.16667Z'
                fill='white'
              />
              <path
                d='M7.35332 15.49L7.61197 14.5241C7.37585 14.4609 7.12474 14.4863 6.90611 14.5956L7.35332 15.49ZM3.33341 17.5L2.34347 17.3586C2.29086 17.7268 2.44697 18.0938 2.7487 18.3112C3.05044 18.5287 3.44795 18.5608 3.78063 18.3944L3.33341 17.5ZM3.87777 13.6895L4.86772 13.8309C4.91582 13.4942 4.78949 13.1562 4.53238 12.9335L3.87777 13.6895ZM10.0001 16.8333C14.935 16.8333 19.3334 13.5975 19.3334 9.16667H17.3334C17.3334 12.0996 14.2699 14.8333 10.0001 14.8333V16.8333ZM7.09466 16.456C8.01109 16.7014 8.98806 16.8333 10.0001 16.8333V14.8333C9.16167 14.8333 8.35865 14.724 7.61197 14.5241L7.09466 16.456ZM3.78063 18.3944L7.80053 16.3845L6.90611 14.5956L2.8862 16.6056L3.78063 18.3944ZM2.88782 13.5481L2.34347 17.3586L4.32336 17.6414L4.86772 13.8309L2.88782 13.5481ZM0.666748 9.16667C0.666748 11.2507 1.67075 13.1012 3.22317 14.4455L4.53238 12.9335C3.3399 11.901 2.66675 10.5737 2.66675 9.16667H0.666748ZM10.0001 1.5C5.06519 1.5 0.666748 4.73578 0.666748 9.16667H2.66675C2.66675 6.23375 5.73023 3.5 10.0001 3.5V1.5ZM19.3334 9.16667C19.3334 4.73578 14.935 1.5 10.0001 1.5V3.5C14.2699 3.5 17.3334 6.23375 17.3334 9.16667H19.3334Z'
                fill='#FBFBFD'
                mask='url(#path-1-inside-1_503_595)'
              />
            </svg>
            <div className='text-subtitle-1 text-white'>
              {post.commentCount}
            </div>
          </div>
        </div>
      </div>
      <div className='text-heading-3 line-clamp-[1] overflow-hidden mb-5 text-center'>
        {post.title}
      </div>
      <div className='text-body-2 h-[200px] break-all line-clamp-[10]'>
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
