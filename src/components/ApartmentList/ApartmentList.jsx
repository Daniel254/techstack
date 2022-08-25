import React, { useState } from "react";
import { List } from "./ApartmentList.styled";
import ApartmentListItem from "./ApartmentListItem";

export default function ApartmentList() {
  const [apList, setApList] = useState([
    {
      id: "1",
      rooms: 1,
      name: "Apartment one",
      price: 150000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, iusto cupiditate dolor accusantium saepe ea iure dicta, reiciendis voluptatum non enim qui reprehenderit molestiae nisi.",
    },
    {
      id: "2",
      rooms: 3,
      name: "Apartment two",
      price: 150000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur iusto explicabo est maxime fuga laboriosam nihil voluptates, unde quia numquam?",
    },
    {
      id: "3",
      rooms: 2,
      name: "Apartment five",
      price: 150000,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Est itaque eveniet ducimus libero necessitatibus ratione natus, fugiat iste assumenda nam labore aliquid eum accusamus laudantium omnis nemo doloremque, esse quasi?",
    },
  ]);
  return (
    <section>
      <h2>Available apartmens ({apList.length})</h2>
      <List>
        {apList.map(({ id, rooms, name, price, description }) => (
          <ApartmentListItem
            key={id}
            id={id}
            rooms={rooms}
            name={name}
            price={price}
            description={description}
          />
        ))}
      </List>
    </section>
  );
}
