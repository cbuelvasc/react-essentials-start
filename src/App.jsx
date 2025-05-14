import { useState } from "react";

import CoreConcept from "./components/CoreConcept";
import Header from "./components/Header";
import TabButton from "./components/TabButton";
import { CORE_CONCEPTS, EXAMPLES, TOPICS } from "./data";
import TabContent from "./components/TabContent";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();

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
            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept
                key={conceptItem.title}
                title={conceptItem.title}
                description={conceptItem.description}
                image={conceptItem.image}
              />
            ))}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {TOPICS.map(({ topic, label }) => (
              <TabButton
                key={topic}
                isSelected={selectedTopic === topic}
                onSelect={() => handleSelect(topic)}
              >
                {label}
              </TabButton>
            ))}
          </menu>
          <div id="tab-content">
            {selectedTopic ? (
              <TabContent
                title={EXAMPLES[selectedTopic].title}
                description={EXAMPLES[selectedTopic].description}
                code={EXAMPLES[selectedTopic].code}
              />
            ) : (
              <h3>Please click a button</h3>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
