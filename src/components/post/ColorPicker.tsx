const ColorPicker = ({ id, color, onColorSelect }) => {
  return (
    <div
      id={id}
      className={`h-10 w-10 mx-3 border border-solid border-[#2D4053] bg-[${color}] cursor-pointer`}
      onClick={() => onColorSelect(color)}
    ></div>
  );
};
export default ColorPicker;
