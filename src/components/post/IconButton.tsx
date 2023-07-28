const IconButton = ({ id, src, alt }) => {
  return !src ? (
    <div
      className={`flex items-center justify-center h-10 w-10 mx-3 cursor-pointer border border-solid border-[#2D4053]`}
    >
      <span className={`text-center text-xs`}>
        선택
        <br />
        안함
      </span>
    </div>
  ) : (
    <div id={id} className={`h-10 w-10 mx-3 cursor-pointer`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default IconButton;
