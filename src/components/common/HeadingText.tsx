interface HeadingText {
  text: string;
}

const HeadingText = ({ text }: HeadingText) => {
  return <h2 className='mb-10 text-heading-2 text-center'>{text}</h2>;
};

export default HeadingText;
