export const Input = ({ id, placeHolder, onChange, value, disabled }) => {
  return (
    <input
      id={id}
      placeholder={placeHolder}
      value={value}
      onChange={(e) => onChange(e)}
      className={`h-10 w-full pl-1 focus:outline-none border border-solid border-blue-gray-880`}
      disabled={disabled}
    ></input>
  );
};
