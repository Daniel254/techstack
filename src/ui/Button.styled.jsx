import styled from "styled-components";
export const ButtonDefault = styled.button`
  border: none;
  outline: none;
  width: 7rem;
  height: 2rem;
  border-radius: 5px;
  color: #ffffff;
  font-size: 0.8rem;
  padding: 0;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    box-shadow: inset 0 -100px rgb(255 255 255 / 20%);
  }
`;
