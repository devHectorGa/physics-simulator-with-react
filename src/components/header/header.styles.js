import styled from 'styled-components';
import { Link as LinkParent } from 'react-router-dom';

export const Container = styled.header`
  height: var(--header-footer-size);
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

export const Logo = styled.img`
  padding: var(--font-size3);
  object-fit: cover;
  transform: scale(0.7);
`;

export const LogoUN = styled(Logo)`
  padding: 0;
  width: 70px;
  height: 70px;
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
`;
