function ColorBox({ colorRange }) {
  const bgColor = `rgb(${colorRange.r}, ${colorRange.g}, ${colorRange.b})`;

  return (
    <div
      className="h-40 w-40 border-gray rounded-sm"
      style={{ backgroundColor: bgColor }}
    ></div>
  );
}

export default ColorBox;
