import pluralize from "pluralize";
import PropTypes from "prop-types";
import React from "react";
import { deleteApartment } from "services/apartmentsApi";
import { ApCard, ApDetails, DeleteBtn } from "./ApartmentListItem.styled";

function ApartmentListItem({
  id,
  rooms,
  name,
  price,
  description,
  refreshList,
}) {
  const deleteClickHandler = (e) => {
    e.target.textContent = "...";
    e.target.setAttribute("disabled", "true");
    deleteApartment(id).then(() => {
      refreshList();
    });
  };
  return (
    <ApCard>
      <ApDetails>
        {name} / {pluralize("room", rooms, true)} / {price}$
        {description && <p>Description: {description}</p>}
      </ApDetails>

      <DeleteBtn onClick={deleteClickHandler}>Delete</DeleteBtn>
    </ApCard>
  );
}

ApartmentListItem.propTypes = {
  id: PropTypes.string.isRequired,
  rooms: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string,
  refreshList: PropTypes.func.isRequired,
};

export default ApartmentListItem;
