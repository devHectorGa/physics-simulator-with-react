import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
  align-items: center;
  align-content: center;
  display: grid;
  flex-direction: column;
  gap: 20px;
  grid-template-columns: repeat(auto-fit, 200px);
  grid-template-rows: repeat(auto-fit, 200px);
  height: calc(100vh - var(--header-footer-size));
  justify-content: center;
  margin: 0 auto;
  max-width: 1024px;
  width: 90%;
  min-height: calc(100% - var(--header-footer-size));
`;

export const Article = styled(Link)`
  align-items: center;
  background-color: var(--accent);
  border-radius: var(--font-size2);
  color: var(--primary);
  display: flex;
  flex-direction: column;
  font-weight: bold;
  justify-content: space-evenly;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  height: 200px;
`;
