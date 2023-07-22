import React from "react";
import { styled } from "styled-components";
import Compose from "../buttons/Compose";
import { sidebarButtonItems } from "../data/SidebarButtonItems";

const LeftSidebar = () => {
  return (
    <Wrapper>
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

      <MeetWrapper></MeetWrapper>

      <HangoutsWrapper></HangoutsWrapper>

      <FooterIconsWrapper></FooterIconsWrapper>
    </Wrapper>
  );
};

export default LeftSidebar;

const Wrapper = styled.div`
  border-right: 1px solid lightgray;
  height: 100vh;
`;

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

const MeetWrapper = styled.div``;

const HangoutsWrapper = styled.div``;

const FooterIconsWrapper = styled.div``;
