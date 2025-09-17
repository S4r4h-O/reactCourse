function Log({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`Row: ${turn.square.row}, Col: ${turns.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
}

export default Log;
