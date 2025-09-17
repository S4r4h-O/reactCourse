import { useState } from "react";
import Header from "./components/Header.jsx";
import Results from "./components/Results.jsx";
import InputGroup from "./components/InputGroup.jsx";

function App() {
  const [tableData, setTableData] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = tableData.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setTableData((prevTableData) => {
      return {
        ...prevTableData,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <InputGroup onChangeInput={handleChange} userInput={tableData} />
      {inputIsValid ? (
        <Results input={tableData} />
      ) : (
        <p className="center">Duration must be greater thank 0.</p>
      )}
    </>
  );
}

export default App;
