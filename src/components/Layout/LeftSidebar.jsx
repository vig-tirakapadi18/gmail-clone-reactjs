import React from "react";
import { styled } from "styled-components";
import Compose from "../buttons/Compose";
import { sidebarButtonItems } from "../data/SidebarButtonItems";
import { BiSolidKeyboard, BiSolidVideo } from "react-icons/bi";
import { MdAccountCircle } from "react-icons/md";
import { footerIcons } from "../data/FooterIcons";

const LeftSidebar = () => {
  return (
    <Wrapper>
      <TopSectionWrapper>
        <ComposeWrapper>
          <Compose />
        </ComposeWrapper>

        <SideButtonsWrapper>
          {sidebarButtonItems.map((item) => (
            <SidebarButtonItem key={item.id}>
              {item.icon} {item.text}
            </SidebarButtonItem>
          ))}
        </SideButtonsWrapper>
      </TopSectionWrapper>

      <BottomSectionWrapper>
        <SidebarSectionWrapper>
          <Title>Meet</Title>
          <p>
            <BiSolidVideo size={22} /> New Meeting
          </p>
          <p>
            <BiSolidKeyboard size={22} /> Join Meeting
          </p>
        </SidebarSectionWrapper>

        <SidebarSectionWrapper>
          <Title>Hangouts</Title>
          <p>
            <MdAccountCircle size={22} /> Marcus Aurelis
          </p>
          <p>
            <MdAccountCircle size={22} /> Seneca
          </p>
        </SidebarSectionWrapper>

        <FooterIconsWrapper>
          {footerIcons.map((icon) => (
            <FooterIcon key={icon.id}>{icon.icon}</FooterIcon>
          ))}
        </FooterIconsWrapper>
      </BottomSectionWrapper>
    </Wrapper>
  );
};

export default LeftSidebar;

const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: calc(100vh - 120px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopSectionWrapper = styled.div``;

const ComposeWrapper = styled.div`
  display: grid;
  place-items: start;
  padding: 10px 20px;
`;

const SideButtonsWrapper = styled.div``;

const SidebarButtonItem = styled.div`
  margin-right: 12px;
  display: grid;
  grid-template-columns: 14% auto;
  color: #5f6368;
  padding: 5px 25px;
  border-radius: 0 100px 100px 0;
  cursor: pointer;
  align-items: center;
  font-size: 18px;

  &:hover {
    background-color: #e5e7eb;
  }
`;

const BottomSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SidebarSectionWrapper = styled.div`
  border-top: 1px solid lightgray;
  margin-bottom: 8px;

  p {
    color: #5f6368;
    display: grid;
    grid-template-columns: 14% auto;
    height: 30px;
    align-items: center;
    padding-left: 25px;
  }
`;

const Title = styled.h4`
  padding-left: 25px;
  margin-bottom: 4px;
  margin-top: 8px;
`;

const FooterIconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid lightgray;
  margin-top: 50px;
`;

const FooterIcon = styled.div`
  margin: 6px;
  margin-top: 10px;
  color: #37393b;
  font-size: 14px;
`;
