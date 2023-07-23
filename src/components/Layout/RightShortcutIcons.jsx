import React from "react";
import { styled } from "styled-components";
import calenderIcon from "../../assets/calender.png";
import keepIcon from "../../assets/keep.png";
import contactsIcon from "../../assets/contacts.png";
import driveIcon from "../../assets/drive.png";
import oneIcon from "../../assets/one.svg";
import { HiPlus } from "react-icons/hi";

const RightShortcutIcons = () => {
  return (
    <Wrapper>
      <IconsWrapper>
        <img
          src={calenderIcon}
          alt="Calender"
        />
        <img
          src={keepIcon}
          alt="Keep"
        />
        <img
          src={contactsIcon}
          alt="Contacts"
        />
        <img
          src={driveIcon}
          alt="Drive"
        />
        <img
          src={oneIcon}
          alt="Google One"
        />
      </IconsWrapper>

      <PlusIcon>
        <HiPlus />
      </PlusIcon>
    </Wrapper>
  );
};

export default RightShortcutIcons;

const Wrapper = styled.div`
  border-left: 1px solid lightgray;
`;

const IconsWrapper = styled.div`
  border-bottom: 1px solid darkgray;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 5px;
  margin-right: 5px;

  img {
    margin: 10px;
    width: 30px;
  }
`;

const PlusIcon = styled.div`
  font-size: 30px;
  color: #000000;
  margin-top: 8px;
  display: flex;
  justify-content: center;
`;
