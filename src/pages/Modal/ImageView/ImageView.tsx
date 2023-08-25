const ImageView = ({ postData }) => {
  const { title, content, updatedAt, user, templateType } = postData;
  const template = templateType
    ? JSON.parse(templateType.replace(/'/g, '"'))
    : {};
  const date = new Date(postData.updateAt);
  return (
    <div
      className='relative flex-col justify-center items-center w-1/2 h-[688px] mx-3 border border-solid border-blue-gray-800'
      style={{ backgroundColor: template?.color }}
    >
      <h2 className='pt-[56px] text-heading-2 text-center'>{title}</h2>
      <p className='mt-[40px] px-[56px] h-[360px] text-body-1 text-left whitespace-pre-line whitespace-nowrap break-all'>
        {content}
      </p>
      <div className='absolute bottom-[48px] right-[56px] flex flex-col'>
        <span className='text-heading-5 text-right'>
          {date.getFullYear()}.{date.getMonth() + 1}.{date.getDate()}
        </span>
        <span className='text-heading-3 text-right'>{user?.name}</span>
      </div>
      {template.icon && (
        <img
          className='absolute bottom-[48px] left-[56px] h-[120px] w-[120px]'
          src={template.icon}
          alt=''
        ></img>
      )}
    </div>
  );
};

export default ImageView;
