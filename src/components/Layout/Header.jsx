import React from "react";
import { styled } from "styled-components";
import { FiMenu } from "react-icons/fi";
import {
  BsFillCaretDownFill,
  BsSearch,
  BsQuestionCircle,
} from "react-icons/bs";
import { IoSettingsOutline, IoApps } from "react-icons/io5";
import { MdAccountCircle } from "react-icons/md";
import gmailIcon from "../../assets/gmailIcon.png";

const Header = () => {
  return (
    <Wrapper>
      <LogoWrapper>
        <div>
          <FiMenu size={32} />
        </div>
        <Logo>
          <img
            src={gmailIcon}
            alt="Gmail"
          />
        </Logo>
      </LogoWrapper>

      <SearchWrapper>
        <SearchBarWrapper>
          <BsSearch
            color="#5f6368"
            size={20}
          />
          <input
            type="text"
            placeholder="Search mail"
          />
          <BsFillCaretDownFill />
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>
        <BsQuestionCircle
          color="#5f6368"
          size={22}
        />
        <IoSettingsOutline
          color="#5f6368"
          size={22}
        />
        <IoApps
          color="#5f6368"
          size={22}
        />
        <MdAccountCircle
          color="#5f6368"
          size={36}
        />
      </IconsWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 15% auto 10%;
  border-bottom: 1px solid lightgray;
  height: 70px;
  align-items: center;
`;

const LogoWrapper = styled.div`
  height: 45px;
  display: grid;
  grid-template-columns: 25% auto;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  display: flex;
  height: 30px;
`;

const SearchWrapper = styled.div``;

const SearchBarWrapper = styled.div`
  margin-left: 25px;
  background-color: #f1f3f4;
  width: 100%;
  max-width: 800px;
  display: grid;
  grid-template-columns: 10% auto 7%;
  place-items: center;
  height: 50px;
  border-radius: 25px;

  input {
    width: 100%;
    height: 30px;
    background: none;
    border: none;
    font-size: 20px;
  }

  :focus {
    outline: none;
  }
`;

const IconsWrapper = styled.div`
  margin: 8px;
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
`;
