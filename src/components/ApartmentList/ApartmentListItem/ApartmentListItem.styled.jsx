import styled from "styled-components";
import { ButtonDefault } from "ui/Button.styled";

export const ApCard = styled.li`
  background-color: #ffffff;
  border: 1px solid #d5d7db;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  @media screen and (min-width: 960px) {
    flex-wrap: nowrap;
  }
`;
export const DeleteBtn = styled(ButtonDefault)`
  background-color: #f2323f;
  height: calc(0.7rem * 1.15 + 1.4rem);
`;
export const ApDetails = styled.div`
  width: 100%;
`;
