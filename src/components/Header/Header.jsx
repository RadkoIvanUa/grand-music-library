import { Link, NavLink, Outlet } from "react-router-dom";
import { StyledHeader } from "./StyledHeader";
import styled from "@emotion/styled";
import logo from "../../img/logo.svg";
import { StyledContainer } from "../Container/StyledContainer";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: var(--mainBlueColor);
  }

  &:hover {
    color: var(--mainBlueColor);
  }
`;

export default function Header() {
  return (
    <div>
      <StyledHeader>
        <Link to="./">
          <img src={logo} width="60" height="60" alt="Logo" />
          <p>GrandMusicLibrary</p>
        </Link>
        <nav>
          <ul>
            <li>
              <StyledLink to="/">Home</StyledLink>
            </li>
            <li>
              <StyledLink to="/Library">Browse</StyledLink>
            </li>
            <li>
              <StyledLink to="/Faq">FAQ</StyledLink>
            </li>
          </ul>
        </nav>
      </StyledHeader>
      <Outlet />
    </div>
  );
}
