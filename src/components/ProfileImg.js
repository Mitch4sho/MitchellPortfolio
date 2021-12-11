import React from "react";
import ProfilePic from "../Assets/jpgImages/profileLarge.jpg";
import styled from "styled-components";
const ImgWrapper = styled.div`
  img {
    max-width: 300px;
    border-radius: 5px;
  }
`;
export default function ProfileImg() {
  return (
    <ImgWrapper>
      <img src={ProfilePic} alt="Mitchell Profile" />
    </ImgWrapper>
  );
}
