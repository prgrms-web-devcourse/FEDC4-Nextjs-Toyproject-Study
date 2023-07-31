export const Input = ({ id, placeHolder, onChange }) => {
  return (
    <input
      id={id}
      placeholder={placeHolder}
      onChange={(e) => onChange(e)}
      className={`h-10 w-full pl-1 focus:outline-none border border-solid border-blue-gray-880`}
    ></input>
  );
};
