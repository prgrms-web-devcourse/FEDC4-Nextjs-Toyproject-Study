const IconButton = ({ src, alt, onIconSelect, isSelected }) => {
  const shadowClass = isSelected ? 'shadow-button-1' : '';

  return !src ? (
    <div
      className={`flex items-center justify-center h-10 w-11 mr-3 cursor-pointer border border-solid border-blue-gray-880 hover:shadow-button-1 ${shadowClass}`}
      onClick={() => onIconSelect(src)}
    >
      <span className={`text-center text-xs`}>
        선택
        <br />
        안함
      </span>
    </div>
  ) : (
    <div
      className={`h-10 w-10 my-4 mx-3 cursor-pointer hover:shadow-button-1 ${shadowClass}`}
      onClick={() => onIconSelect(src)}
    >
      <img src={src} alt={alt} />
    </div>
  );
};

export default IconButton;
