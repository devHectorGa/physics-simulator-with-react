import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  height: calc(100vh - 90px);

  & > canvas {
    border: 1px solid var(--accent2);
    display: block;
    bottom: 0;
  }
`;
