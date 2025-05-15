import { useState } from "react";

import { EXAMPLES, TOPICS } from "../data";
import TabButton from "./TabButton";
import TabContent from "./TabContent";

function Examples() {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  return (
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
  );
}

export default Examples;
