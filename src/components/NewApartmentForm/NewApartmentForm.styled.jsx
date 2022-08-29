import styled, { css } from "styled-components";
import { ButtonDefault } from "ui/Button.styled";

const textFieldStyles = css`
  display: block;
  font-size: 0.7rem;
  width: 100%;
  padding: 0.7rem;
  border-radius: 5px;
  border: 1px solid #d5d7db;
  outline: 1px solid transparent;
  transition: outline 0.1s ease;
  &:focus-visible {
    border-color: #bec0c3;
    outline: #bec0c3 solid 1px;
  }
  &::placeholder {
    color: #d5d7db;
  }
`;

export const Form = styled.form`
  background-color: #e8eaed;
  padding: 20px 20px 30px;
  border-radius: 5px;
  border: 1px solid #d5d7db;
  display: flex;
  flex-wrap: wrap;
  gap: unset;
  @media screen and (min-width: 960px) {
    flex-wrap: nowrap;
    gap: 1rem;
  }
`;
export const Label = styled.label`
  display: inline-block;
  font-size: 0.7rem;
  padding: 0;
  position: relative;
`;
export const FieldName = styled(Label)`
  width: 100%;
  @media screen and (min-width: 960px) {
    width: calc(50% - 1rem);
  }
`;
export const FieldRooms = styled(Label)`
  width: calc(50% - 1rem / 2);
  @media screen and (min-width: 960px) {
    width: calc(25% - 1rem / 2);
  }
`;
export const FieldPrice = styled(Label)`
  width: calc(50% - 1rem / 2);
  @media screen and (min-width: 960px) {
    width: calc(25% - 1rem / 2);
  }
`;
export const FieldDescription = styled(Label)`
  width: 100%;
`;
export const Input = styled.input`
  ${textFieldStyles}
`;
export const Textarea = styled.textarea`
  ${textFieldStyles}
  min-height: 7em;
  resize: vertical;
`;
export const Submit = styled(ButtonDefault)`
  background-color: #23ba99;
  font-size: 0.7rem;
  margin-top: calc(0.7rem * 1.15);
  height: calc(0.7rem * 1.15 + 1.4rem);
`;
export const Fieldset = styled.fieldset`
  padding: 0;
  margin: 0;
  border: none;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
export const ErrorMessage = styled.div`
  position: absolute;
  top: 100%;
  color: red;
`;
