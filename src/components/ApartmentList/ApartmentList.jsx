import React from "react";
import { List } from "./ApartmentList.styled";
import ApartmentListItem from "./ApartmentListItem";

export default function ApartmentList({
  apartments,
  error,
  refershApartments,
  children,
}) {
  return (
    <section>
      <h2>Available apartments {apartments && `(${apartments?.length})`}</h2>
      {children}
      <List>
        {error && <p>{error}</p>}
        {apartments?.map(({ id, rooms, name, price, description }) => (
          <ApartmentListItem
            key={id}
            id={id}
            rooms={rooms}
            name={name}
            price={price}
            description={description}
            refreshList={refershApartments}
          />
        ))}
      </List>
    </section>
  );
}
