import { useFormik } from "formik";
import React from "react";
import * as yup from "yup";
import {
  ErrorMessage,
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
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("Apartment title is a required")
      .max(99, "Must be 99 characters or less"),
    rooms: yup
      .number()
      .typeError("Type number of rooms")
      .required("Type number of rooms")
      .integer("Type actual number of rooms")
      .moreThan(0, "Type actual number of rooms"),
    price: yup
      .number()
      .typeError("Type the price in numbers")
      .required("Type the price")
      .moreThan(0, "Type actual price"),
    description: yup.string().max(999, "Must be 999 characters or less"),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      rooms: "",
      price: "",
      description: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });
  return (
    <section>
      <h2>Add a new apartment</h2>
      <Form onSubmit={formik.handleSubmit}>
        <Fieldset>
          <FieldName>
            Title
            <Input
              type="text"
              name="name"
              autoComplete="off"
              placeholder="Ex. Flat in the city center"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <ErrorMessage>{formik.errors.name}</ErrorMessage>
            ) : null}
          </FieldName>
          <FieldRooms>
            Rooms
            <Input
              type="text"
              name="rooms"
              autoComplete="off"
              placeholder="4"
              onChange={formik.handleChange}
              value={formik.values.rooms}
            />
            {formik.touched.rooms && formik.errors.rooms ? (
              <ErrorMessage>{formik.errors.rooms}</ErrorMessage>
            ) : null}
          </FieldRooms>
          <FieldPrice>
            Price
            <Input
              type="text"
              name="price"
              autoComplete="off"
              placeholder="99.00"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <ErrorMessage>{formik.errors.price}</ErrorMessage>
            ) : null}
          </FieldPrice>
          <FieldDescription>
            Description
            <Textarea
              type="textarea"
              name="description"
              onChange={formik.handleChange}
              value={formik.values.textarea}
            />
            {formik.touched.description && formik.errors.description ? (
              <ErrorMessage>{formik.errors.description}</ErrorMessage>
            ) : null}
          </FieldDescription>
        </Fieldset>
        <Submit type="submit">Add</Submit>
      </Form>
    </section>
  );
}

NewApartmentForm.propTypes = {};

export default NewApartmentForm;
