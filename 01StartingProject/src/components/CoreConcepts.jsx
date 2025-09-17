import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem, index) => (
          <CoreConcept
            key={index}
            title={conceptItem.title}
            image={conceptItem.image}
            description={conceptItem.description}
          />
        ))}
      </ul>
    </section>
  );
}

export default CoreConcepts;
