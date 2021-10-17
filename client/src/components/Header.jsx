import React from "react"
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(#CDF0EA, #F9F9F9);
`;

function Header() {
  return (
    <StyledHeader className="header">
      <h1 className="header__title">Eficode Task</h1>
      <h2 className="header__secondary">October 2021</h2>
      <h3 className="header__tertiary">By Shannon Schrauwen</h3>
    </StyledHeader>
  );
}

export { Header };
