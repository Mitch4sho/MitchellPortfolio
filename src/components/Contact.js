import React from "react";
import styled from "styled-components";

const ContactStyled = styled.div`
  padding-bottom: 64px;

  h2 {
    width: 100%;
    margin-bottom: 36px;

    display: flex;
    align-items: center;
    gap: 20px;
  }

  h2::after {
    content: "";
    display: block;
    background-color: #b9d8f3;
    width: 100px;
    height: 1px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  a {
    font-size: 0.95em;
    background-color: transparent;
    color: #23ce23;
    border: 1px solid #23ce23;
    border-radius: 5px;
    padding: 0.5rem;
    text-align: center;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      background: #23ce2325;
      color: #52e28e;
    }
  }

  @media only screen and (min-width: 1025px) {
    h1 {
      font-size: 3.5em;
    }

    p {
      width: 50%;
    }
  }
`;

export default function Contact() {
  return (
    <ContactStyled id="contact">
      <h2 data-aos="fade-up" data-aos-delay="100">
        Get In touch
      </h2>
      <div>
        <p>
          I’m currently looking for new opportunities; my inbox is always open.
          Whether you have a question or want to say hi, I will try my best to
          get back to you!
        </p>
        <a href="mailto: MitchellOliver1991@gmail.com">Contact Me</a>
      </div>
    </ContactStyled>
  );
}
