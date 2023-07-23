import React, { useState } from "react";
import { styled } from "styled-components";
import { MdOutlineCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";

const EmailItem = ({
  checked,
  starred,
  from,
  subject,
  message,
  received,
  read,
}) => {
  const [check, setCheck] = useState(checked);
  const [star, setStar] = useState(starred);

  const checkedHandler = () => {
    check ? setCheck(false) : setCheck(true);
  };

  const starredHandler = () => {
    star ? setStar(false) : setStar(true);
  };

  return (
    <Wrapper>
      <CheckboxIcon onClick={checkedHandler}>
        {check ? (
          <MdCheckBox
            size={24}
            color="#e11d48"
          />
        ) : (
          <MdOutlineCheckBoxOutlineBlank size={24} />
        )}
      </CheckboxIcon>

      <StarIcon onClick={starredHandler}>
        {star ? (
          <FaStar
            size={24}
            color="#f59e0b"
          />
        ) : (
          <FaRegStar size={24} />
        )}
      </StarIcon>

      <From>{read ? <Read>{from}</Read> : <Unread>{from}</Unread>}</From>

      <Subject>
        {read ? (
          <Read>
            {subject} - {message}
          </Read>
        ) : (
          <Unread>
            {subject} - {message}
          </Unread>
        )}
      </Subject>

      <TimeStamp>
        {read ? <Read>{received}</Read> : <Unread>{received}</Unread>}
      </TimeStamp>
    </Wrapper>
  );
};

export default EmailItem;

const Wrapper = styled.div`
  display: flex;
  height: 48px;
  border-bottom: 1px solid lightgray;
  align-items: center;
  display: grid;
  grid-template-columns: 30px 50px 120px auto 60px;
`;

const CheckboxIcon = styled.div`
  padding-left: 10px;
`;

const StarIcon = styled.div`
  padding-left: 30px;
`;

const From = styled.div`
  padding-left: 70px;
`;

const Read = styled.h4`
  color: #7b7b7b;
`;

const Unread = styled.h4`
  color: black;
  font-weight: 800;
  font-size: 18px;
`;

const Subject = styled.h4`
  padding-left: 100px;
`;

const TimeStamp = styled.h4``;
