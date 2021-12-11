import React, { useState, useEffect } from "react";
import { debounce } from "../utilities/helper";
import styled from "styled-components";
import Pdf from "../Assets/mitchell_resume.pdf";

const StyledNavbar = styled.header`
  position: fixed;
  height: 60px;
  width: 100%;
  top: ${({ visible }) => (visible ? `0` : `-80px`)};
  transition: top 0.8s;
  background-color: rgba(39, 45, 45, 0.95);
  box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.5);
  z-index: 1;

  p {
    display: none;
  }

  ul {
    padding: 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: #edf5fc;
    transition: 0.3s;

    &:hover {
      color: #23ce23;
    }
  }

  li:last-child > a {
    font-size: 14px;
    color: #23ce23;
    background: transparent;
    border: 1px solid #23ce23;
    border-radius: 5px;
    padding: 0.75rem 1rem;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
      background-color: #23ce2325;
      color: #52e28e;
    }
  }

  @media only screen and (min-width: 1025px) {
    position: fixed;
    height: 80px;
    width: 100%;
    text-align: center;
    top: ${({ visible }) => (visible ? `0` : `-80px`)};
    transition: top 0.8s;
    background-color: rgba(39, 45, 45, 0.85);
    box-shadow: 0px 10px 30px -10px rgba(0, 0, 0, 0.5);

    p {
      font-size: 40px;
    }

    ul {
      margin-right: 30px;
      width: 25%;

      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    div {
      display: none;
    }
  }
`;

export default function NavBar() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 70) ||
        currentScrollPos < 10
    );

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <StyledNavbar visible={visible}>
      <p>Mitchell Oliver</p>
      <ul>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Me</a>
        </li>
        <li>
          <a href={Pdf} target="_blank" rel="noreferrer">
            Resume
          </a>
        </li>
      </ul>
    </StyledNavbar>
  );
}
