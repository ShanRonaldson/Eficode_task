import React from "react"
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: linear-gradient(#f9f9f9, #cdf0ea);
  height: 5.75rem;
`;

const StyledImg = styled.img`
  height: 1.5rem;
`;

const StyledIcon = styled.a`
  font-size: 1.5rem;
  color: green;
  padding: 0.5rem;
`;

export function Footer() {
  return (
    <StyledFooter className="footer">
      <div className="footer__info">
        Created by Shannon Schrauwen for Eficode <br />
        Tech stack: React (using create-react-app), Node.JS <span></span>
        <FontAwesomeIcon icon={["fab", "react"]} className="footer--icons" />
      </div>

      <div className="footer__imgs">
        <StyledIcon
          href="https://github.com/ShanSchrauwen"
          className="footer__link"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </StyledIcon>
        <StyledIcon
          href="https://stackoverflow.com/users/13308896/shanschrauwen"
          className="footer__link"
        >
          <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
        </StyledIcon>
        <StyledIcon
          href="https://www.linkedin.com/in/shannon-schrauwen-562b98bb/"
          className="footer__link"
        >
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
        </StyledIcon>
      </div>
    </StyledFooter>
  );
}
