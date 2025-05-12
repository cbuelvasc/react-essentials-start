import { useState } from "react";

import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES } from "./data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("Please click a button");

  const handleSelect = (selectedButton) => {
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  };

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((concept) => (
              <CoreConcept
                key={concept.title}
                title={concept.title}
                description={concept.description}
                image={concept.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              isActive={true}
              onSelect={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("state")}>State</TabButton>
          </menu>
          {selectedTopic}
        </section>
      </main>
    </div>
  );
}

export default App;
