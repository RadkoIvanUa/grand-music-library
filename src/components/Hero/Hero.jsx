import { Link } from "react-router-dom";
import { StyledContainer } from "../Container/StyledContainer";
import { StyledHero, StyledHeroBtn, StyledHeroTitle } from "./StyledHero";

export default function Hero() {
  return (
    <StyledHero>
      <StyledContainer>
        <StyledHeroTitle>
          <h1>UNLIMITED MUSIC FOR YOUR CONTENT</h1>
        </StyledHeroTitle>
        <StyledHeroBtn>
          <Link to="./library">Browse</Link>
        </StyledHeroBtn>
      </StyledContainer>
    </StyledHero>
  );
}
