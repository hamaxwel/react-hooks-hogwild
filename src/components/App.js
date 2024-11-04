import React, { useState, useMemo } from "react";
import Nav from "./Nav";
import Filter from "./Filter";
import HogList from "./HogList";
import HogForm from "./HogForm"; // Import your new component
import hogsData from "../porkers_data"; // Rename to avoid confusion with state

function App() {
  const [hogs, setHogs] = useState(hogsData); // Use state for hogs
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const hogsToDisplay = useMemo(() => {
    return hogs
      .filter((hog) => (showGreased ? hog.greased : true))
      .sort((hog1, hog2) => {
        if (sortBy === "weight") {
          return hog1.weight - hog2.weight;
        } else {
          return hog1.name.localeCompare(hog2.name);
        }
      });
  }, [hogs, showGreased, sortBy]);

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]); // Add new hog to the state
  };

  return (
    <div className="ui grid container App">
      <div className="sixteen wide column centered">
        <Nav />
      </div>
      <div className="sixteen wide column centered">
        <Filter
          showGreased={showGreased}
          onChangeShowGreased={setShowGreased}
          sortBy={sortBy}
          onChangeSortBy={setSortBy}
        />
      </div>
      <div className="sixteen wide column centered">
        <HogForm onAddHog={addHog} /> {/* Include the form here */}
      </div>
      <div className="sixteen wide column centered">
        <HogList hogs={hogsToDisplay} />
      </div>
    </div>
  );
}

export default App;
