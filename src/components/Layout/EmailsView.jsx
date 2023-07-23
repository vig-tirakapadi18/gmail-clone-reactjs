import React from "react";
import { styled } from "styled-components";
import { MdCheckBox, MdRefresh, MdMoreVert } from "react-icons/md";
import { emailData } from "../data/EmailsData";
import EmailItem from "../emailItem/EmailItem";

const EmailsView = () => {
  return (
    <Wrapper>
      <TopWrapper>
        <Icon>
          <MdCheckBox color="#dc2626" />
        </Icon>
        <Icon>
          <MdRefresh />
        </Icon>
        <Icon>
          <MdMoreVert />
        </Icon>
      </TopWrapper>

      <EmailsContainer>
        {emailData.map((email) => (
          <EmailItem
            key={email.id}
            checked={email.checked}
            starred={email.starred}
            from={email.from}
            subject={email.subject}
            message={email.message}
            received={email.received}
            read={email.read}
          />
        ))}
      </EmailsContainer>
    </Wrapper>
  );
};

export default EmailsView;

const Wrapper = styled.div``;

const TopWrapper = styled.div`
  padding-top: 25px;
  padding-left: 25px;
  font-size: 24px;
  height: 48px;
  border-bottom: 1px solid lightgray;
`;

const Icon = styled.span`
  margin: 15px;
`;

const EmailsContainer = styled.div``;
