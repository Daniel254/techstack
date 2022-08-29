import { SORT_ORDER } from "constants/sortOrder";
import PropTypes from "prop-types";
import React from "react";
import { RoomsInput, Select } from "./SearchBar.styled";

function SearchBar({ sortOrder, setSortOrder, setApFilterByRoom }) {
  const roomFilterChangeHandler = (e) => {
    const filterByRoom = parseInt(e.target.value) || "";
    setApFilterByRoom(filterByRoom);
  };

  return (
    <p>
      Sort by:&nbsp;
      <Select onChange={(e) => setSortOrder(e.target.value)}>
        <option value={SORT_ORDER.ASC_PRICE}>Price - lowest to highest</option>
        <option value={SORT_ORDER.DESC_PRICE}>Price - highest to lowest</option>
      </Select>
      Rooms:&nbsp;
      <RoomsInput type="text" onChange={roomFilterChangeHandler} />
    </p>
  );
}

SearchBar.propTypes = {
  setSortOrder: PropTypes.func.isRequired,
  setApFilterByRoom: PropTypes.func.isRequired,
};

export default SearchBar;
