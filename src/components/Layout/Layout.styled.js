import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiMoviePlay } from "react-icons/bi";

export const Header = styled.header`
  padding: 1.2rem 2.4rem;
  background-color: #db16bc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: end;
  justify-content: center;
  gap: 1rem;
`;

export const Link = styled(NavLink)`
  color: ${(p) => p.theme.colors.lightTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: normal;
  padding: 1.2rem 2.4rem;
  transition: 0.4s;

  &.active {
    color: ${(p) => p.theme.colors.accent};
  }

  &:hover {
    background-color: #343a40;
    border-radius: 0.4rem;
  }

  @media (max-width: 400px) {
    padding: 1.2rem;
  }
`;

export const Logo = styled(BiMoviePlay)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.lightTextColor};
`;

export const LogoLink = styled(NavLink)`
  display: flex;
  gap: 1.2rem;
  align-items: end;
`;

export const LogoText = styled.span`
  color: ${(p) => p.theme.colors.lightTextColor};
  font-family: "Roboto", sans-serif;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.2;
  letter-spacing: 1px;
`;

export const LogoSpan = styled.span`
  color: ${(p) => p.theme.colors.accent};
`;
