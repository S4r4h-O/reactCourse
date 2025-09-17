import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";
import { useState } from "react";
import { EXAMPLES } from "../data";

function Examples() {
  const [activeContent, setActiveContent] = useState();

  function handleSelect(selectedButton) {
    setActiveContent(selectedButton);
  }

  let tabContent = <p>Please select a topic.</p>;

  if (activeContent) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[activeContent].title}</h3>
        <p>{EXAMPLES[activeContent].description}</p>
        <pre>
          <code>{EXAMPLES[activeContent].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Section title="Examples" id="examples">
      <Tabs
        ButtonsContainer="menu"
        buttons={
          <>
            <TabButton
              isSelected={activeContent === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={activeContent === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isSelected={activeContent === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isSelected={activeContent === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      >
        {tabContent}
      </Tabs>
    </Section>
  );
}

export default Examples;
