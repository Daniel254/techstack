import styled from "styled-components";

export const RoomsInput = styled.input`
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  margin: 0;
  text-align: center;
  width: 2rem;
  &:focus {
    outline: none;
    z-index: 1;
  }
`;

export const Select = styled.select`
  align-items: center;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg fill='%233e77aa' viewBox='0 0 13 7' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6.5 7a.956.956 0 0 1-.657-.256l-5.57-5.25a.839.839 0 0 1 0-1.237.968.968 0 0 1 1.312 0L6.5 4.888 11.415.257a.968.968 0 0 1 1.313 0 .839.839 0 0 1 0 1.237l-5.572 5.25A.956.956 0 0 1 6.5 7Z'/%3E%3C/svg%3E");
  background-position: right 12px center;
  background-repeat: no-repeat, repeat;
  background-size: 14px 9px;
  border: 1px solid #d2d2d2;
  border-radius: 4px;
  cursor: pointer;
  display: inline-flex;
  font-size: 14px;
  height: 32px;
  margin: 0 10px 0 0;
  padding-left: 12px;
  padding-right: 40px;
  text-align: left;
  &:focus {
    outline: none;
    z-index: 1;
  }
`;
