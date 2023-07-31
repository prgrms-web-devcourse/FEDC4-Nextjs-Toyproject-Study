interface Button {
  text: string;
  onClick?: () => void;
}

export const LargeButton = ({ text, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      className='text-button-1 h-[42px] px-4 py-2 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-4 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)]'
    >
      {text}
    </button>
  );
};

export const SmallButton = ({ text, onClick }: Button) => {
  return (
    <button
      onClick={onClick}
      className='text-button-2 px-3 py-1.5 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-3 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)]'
    >
      {text}
    </button>
  );
};
