import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState("");
  const [greased, setGreased] = useState(false);
  const [image, setImage] = useState(""); // New state for image URL
  const [specialty, setSpecialty] = useState(""); // New state for specialty

  const handleSubmit = (event) => {
    event.preventDefault();
    const newHog = {
      name,
      weight: parseFloat(weight),
      greased,
      image,
      specialty,
    };
    onAddHog(newHog);
    // Reset form
    setName("");
    setWeight("");
    setGreased(false);
    setImage("");
    setSpecialty("");
  };

  return (
    <form onSubmit={handleSubmit} className="ui form">
      <h3>Add a New Hog</h3>
      <div className="field">
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Weight</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>
          <input
            type="checkbox"
            checked={greased}
            onChange={(e) => setGreased(e.target.checked)}
          />
          Greased
        </label>
      </div>
      <div className="field">
        <label>Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
      </div>
      <div className="field">
        <label>Specialty</label>
        <input
          type="text"
          value={specialty}
          onChange={(e) => setSpecialty(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="ui button">
        Add Hog
      </button>
    </form>
  );
}

export default HogForm;
