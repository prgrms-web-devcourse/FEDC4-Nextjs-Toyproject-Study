import { FC, useEffect } from 'react';
import { Post } from 'interface';

// interface ImageViewProps {
//   post: Post;
// }
import icon_01 from 'assets/img/icon_01.svg';

console.log(icon_01);
const ImageView = ({ postData }) => {
  let template;
  const { title, content, updatedAt, user, templateType } = postData;
  templateType ? (template = JSON.parse(templateType)) : '';
  const date = new Date(postData.updateAt);
  return (
    <div
      className={`flex flex-col justify-center items-center`}
      style={{ backgroundColor: template?.color }}
    >
      <h2 className='text-x1 font-bold mb-5 text-center'>{title}</h2>
      <p className='mb-10 h-36'>{content}</p>
      <h4 className='font-semibold text-right'>{user?.name}</h4>
      <h5 className='font-medium text-right'>
        {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
      </h5>
      <img
        className={`h-10 w-10 absolute bottom-10 left-10`}
        src={template?.icon}
      ></img>
    </div>
  );
};

export default ImageView;
