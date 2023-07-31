import { NavLink } from "react-router-dom";
import { StyledContainer } from "../Container/StyledContainer";
import { StyledBtn, StyledHero, StyledHeroTitle } from "./StyledHero";
import styled from "@emotion/styled";

const StyledLink = styled(NavLink)`
  color: white;
  padding: "0.6em 1.2em";
  &:hover {
    color: inherit;
  }
`;

export default function Hero() {
  return (
    <StyledHero className="hero">
      <StyledContainer>
        <StyledHeroTitle>
          <h1 className="title">UNLIMITED MUSIC FOR YOUR CONTENT</h1>
        </StyledHeroTitle>
        <StyledBtn>
          <StyledLink to="./library">Browse</StyledLink>
        </StyledBtn>
      </StyledContainer>
    </StyledHero>
  );
}
