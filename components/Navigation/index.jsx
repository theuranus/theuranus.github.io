import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { PATHS } from "../../constants";

const Navigation = () => {
  return (
    <StyledNavigation>
      {PATHS.map((path) => (
        <Link key={path.path} href={path.path}>
          <li>{path.label}</li>
        </Link>
      ))}
    </StyledNavigation>
  );
};

export default Navigation;

const StyledNavigation = styled.ul`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  box-shadow: -5px -5px 10px rgb(255 255 255 / 5%),
    5px 5px 15px rgb(0 0 0 / 50%);
  padding: 0 1rem;
  li {
    list-style: none;
    color: white;
    cursor: pointer;
    &:hover {
      color: #03a9f4;
    }
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
`;
