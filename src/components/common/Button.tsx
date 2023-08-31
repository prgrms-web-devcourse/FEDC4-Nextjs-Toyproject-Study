interface Button {
  text: string;
  disabled?: boolean;
  onClick?: (event) => void;
  id?: string;
  style?: React.CSSProperties;
}

export const LargeButton = ({
  id,
  style,
  text,
  onClick,
  disabled = false,
}: Button) => {
  return (
    <button
      id={id}
      style={style}
      disabled={disabled}
      onClick={onClick}
      className='text-button-1 text-blue-gray-999 h-10 px-4 py-2 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-4 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)] disabled:bg-[#D7E2EB]/[.35] disabled:border-[#000000]/[.5] disabled:text-[#000000]/[.5] disabled:hover:shadow-none'
    >
      {text}
    </button>
  );
};

export const SmallButton = ({ text, onClick, disabled = false }: Button) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      className='text-button-2 text-blue-gray-999 px-3 py-1.5 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-3 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)] disabled:bg-[#D7E2EB]/[.35] disabled:border-[#000000]/[.5] disabled:text-[#000000]/[.5] disabled:hover:shadow-none'
    >
      {text}
    </button>
  );
};
