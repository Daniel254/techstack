import pluralize from "pluralize";
import PropTypes from "prop-types";
import React from "react";
import { ApCard, ApDetails, DeleteBtn } from "./ApartmentListItem.styled";

function ApartmentListItem({ id, rooms, name, price, description }) {
  return (
    <ApCard>
      <ApDetails>
        {name} / {pluralize("room", rooms, true)} / {price}$
        <p>Description: {description}</p>
      </ApDetails>

      <DeleteBtn>Delete</DeleteBtn>
    </ApCard>
  );
}

ApartmentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
};

export default ApartmentListItem;
