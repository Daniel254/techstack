import React from "react";
import {
  FieldDescription,
  FieldName,
  FieldPrice,
  FieldRooms,
  Fieldset,
  Form,
  Input,
  Submit,
  Textarea,
} from "./NewApartmentForm.styled";

function NewApartmentForm(props) {
  return (
    <section>
      <h2>Add a new apartment</h2>
      <Form>
        <Fieldset>
          <FieldName>
            Title
            <Input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Ex. Flat in the city center"
            />
          </FieldName>
          <FieldRooms>
            Rooms
            <Input
              type="text"
              name="rooms"
              autoComplete="off"
              placeholder="4"
            />
          </FieldRooms>
          <FieldPrice>
            Price
            <Input
              type="text"
              name="price"
              autoComplete="off"
              placeholder="99.00"
            />
          </FieldPrice>
          <FieldDescription>
            Description
            <Textarea type="textarea" name="description" />
          </FieldDescription>
        </Fieldset>
        <Submit type="submit">Add</Submit>
      </Form>
    </section>
  );
}

NewApartmentForm.propTypes = {};

export default NewApartmentForm;
