import React from "react";
import { styled } from "styled-components";
// import { ImPencil } from "react-icons/im";
import plusIcon from "../../assets/plus.png";

const Compose = () => {
  return (
    <Wrapper>
      <img
        src={plusIcon}
        alt="Compose"
      />
      <p>Compose</p>
    </Wrapper>
  );
};

export default Compose;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 35% auto;
  width: auto;
  align-items: center;
  padding: 6px 32px 6px 8px;
  border-radius: 50px;
  box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
    0 1px 3px 1px rgba(60, 64, 67, 0.149);
  cursor: pointer;
  color: #3c4043;
  font-weight: 500;
  font-size: 0.875rem;
  transition: box-shadow 0.08s linear,
    min-width 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;

  img {
    width: 35px;
  }

  p {
    font-size: 18px;
  }

  &:hover {
    box-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.302),
      0 1px 3px 1px rgba(60, 64, 67, 0.149);
    background-color: #fafafb;
  }
`;
