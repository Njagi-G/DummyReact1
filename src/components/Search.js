import React, { useState } from "react";

function Search({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term); // Pass the search term to the parent component
  };

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
