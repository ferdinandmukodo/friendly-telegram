import React from "react";

function Search(searching) {
  const setSearch = searching.setSearch;

  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;