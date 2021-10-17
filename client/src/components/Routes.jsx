import React from "react";
import styled from "styled-components";

import { Switch, Route, useLocation, NavLink } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Content } from "./Content";
import { Table } from "./Table";

// Styles

const StyledNav = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 0.5rem;
`;

export function Routes() {
  let location = useLocation();

  return (
    <div className="nav">
      <div className="nav--Router">
        <StyledNav className="nav--list">
          <NavLink
            exact
            activeClassName="active"
            to="/home"
            className="nav--list-item"
          >
            Content
          </NavLink>

          <NavLink
            activeClassName="active"
            to="/taskInfo"
            className="nav--list-item"
          >
            Data Table
          </NavLink>
        </StyledNav>

        <hr />

        <div className="nav--Router-content">
          <TransitionGroup>
            <CSSTransition
              appear
              in
              timeout={400}
              classNames="slide"
              key={location.key}
            >
              <Switch location={location}>
                <Route path="/home" children={<Content />} />
                <Route path="/taskInfo" children={<Table />} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
}
