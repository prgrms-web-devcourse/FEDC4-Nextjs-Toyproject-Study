const ColorPicker = ({ id, color, onColorSelect, isSelected }) => {
  const shadowClass = isSelected ? 'shadow-button-1' : '';

  return (
    <div
      id={id}
      className={`h-10 pb-8 w-10 mx-3 my-4 border border-solid border-[#2D4053] cursor-pointer hover:shadow-button-1 ${shadowClass}`}
      style={{ backgroundColor: color }}
      onClick={() => onColorSelect(color, id)}
    ></div>
  );
};
export default ColorPicker;
