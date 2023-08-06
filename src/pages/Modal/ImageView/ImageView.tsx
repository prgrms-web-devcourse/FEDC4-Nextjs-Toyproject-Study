const ImageView = ({ postData }) => {
  const { title, content, updatedAt, user, templateType } = postData;
  const template = templateType
    ? JSON.parse(templateType.replace(/'/g, '"'))
    : {};
  const date = new Date(postData.updateAt);

  return (
    <div
      className={`mx-3 w-1/2 border border-solid border-blue-gray-800 h-[688px] flex-col justify-center items-center`}
      style={{ backgroundColor: template?.color }}
    >
      <div className={`p-12`}>
        <span className='font-dgm text-heading-2 font-bold text-center'>
          {title}
        </span>
      </div>
      <div className={`m-10 h-[360px]`}>
        <span className='text-heading-4 text-center'>{content}</span>
      </div>
      <div className={`flex flex-col mr-10 mt-20`}>
        <span className='text-heading-5 text-right'>
          {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
        </span>
        <span className='text-heading-3 text-right'>{user?.name}</span>
      </div>
      <img
        className={`h-[120px] w-[120px] absolute bottom-10 left-10`}
        src={template?.icon}
      ></img>
    </div>
  );
};

export default ImageView;
