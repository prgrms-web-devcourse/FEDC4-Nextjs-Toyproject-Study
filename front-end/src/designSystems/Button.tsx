interface ButtonText {
  text: string;
}

const Button = ({ text }: ButtonText) => {
  return (
    <button className='px-3 py-1.5 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-3 hover:shadow-[2px_2px_0px_0px_rgba(32,43,61,1)]'>
      {text}
    </button>
  );
};

export default Button;
