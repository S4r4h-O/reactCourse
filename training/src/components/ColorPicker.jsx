function ColorPicker({ range, onChangeAction }) {
  return (
    <div className="flex flex-col">
      <label className="label text-red-500 font-mono font-bold mt-2">
        R channel
      </label>
      <input
        className="range range-error"
        type="range"
        max="255"
        value={range.r}
        onChange={(e) => onChangeAction("r", e.target.value)}
      />
      <label className="label text-green-500 font-mono font-bold mt-2">
        G channel
      </label>
      <input
        className="range range-success"
        type="range"
        max="255"
        value={range.g}
        onChange={(e) => onChangeAction("g", e.target.value)}
      />
      <label className="label text-blue-500 font-mono font-bold mt-2">
        B channel
      </label>
      <input
        className="range range-primary"
        type="range"
        max="255"
        value={range.b}
        onChange={(e) => onChangeAction("b", e.target.value)}
      />
      <p>
        RGB {range.r}, {range.g}, {range.b}
      </p>
    </div>
  );
}

export default ColorPicker;
