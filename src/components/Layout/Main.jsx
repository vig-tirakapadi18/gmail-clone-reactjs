import React from "react";
import LeftSidebar from "./LeftSidebar";
import EmailsView from "./EmailsView";
import RightShortcutIcons from "./RightShortcutIcons";
import { styled } from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <LeftSidebar />
      <EmailsView />
      <RightShortcutIcons />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 270px auto 5%;
`;
