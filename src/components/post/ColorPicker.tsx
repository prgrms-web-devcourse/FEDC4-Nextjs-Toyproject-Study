const ColorPicker = ({ id, color, onColorSelect, isSelected }) => {
  const shadowClass = isSelected ? 'shadow-button' : '';

  return (
    <div
      id={id}
      className={`h-10 w-10 mx-3 border border-solid border-[#2D4053] cursor-pointer hover:shadow-button ${shadowClass}`}
      style={{ backgroundColor: color }}
      onClick={() => onColorSelect(color, id)}
    ></div>
  );
};
export default ColorPicker;
