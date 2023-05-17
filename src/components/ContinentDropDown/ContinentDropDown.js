import React, { useState } from 'react';
import "./ContinentDropDown.scss";

function ContinentDropdown() {
  const [selectedContinent, setSelectedContinent] = useState('');

  const handleSelectChange = (event) => {
    setSelectedContinent(event.target.value);
  };

  return (
    <div className="select">
      <select className="select__option" value={selectedContinent} onChange={handleSelectChange}>
        <option value="">Choose a continent</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Australia">Australia</option>
      </select>
      {selectedContinent && (
        <p className="select__result">Thanks for choosing {selectedContinent}</p>
      )}
    </div>
  );
}

export default ContinentDropdown;


