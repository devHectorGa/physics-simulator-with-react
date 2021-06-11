import styled from 'styled-components';
import { Link as LinkParent } from 'react-router-dom';

export const Container = styled.header`
  height: var(--header-footer-size);
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
  z-index: 1;
`;

export const Logo = styled.img`
  object-fit: contain;
  height: 65px;
  width: auto;
`;

export const LogoUN = styled(Logo)`
  width: 60px;
  height: 60px;
  background-color: var(--white);
  border-radius: 50%;
`;

export const NavUl = styled.ul`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-end;
  padding: var(--font-size3);
  width: 100%;
`;

export const NavLi = styled.li`
  list-style: none;
`;

export const Link = styled(LinkParent)`
  color: var(--accent);
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 70px;
  width: fit-content;
`;
