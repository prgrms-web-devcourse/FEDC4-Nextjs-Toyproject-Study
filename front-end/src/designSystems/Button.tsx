interface ButtonText {
  text: string;
}

const Button = ({ text }: ButtonText) => {
  return (
    <button className='px-3 py-1.5 bg-[#D7E2EB] border border-solid border-[#202b3d] justify-center items-center gap-3'>
      {text}
    </button>
  );
};

export default Button;
