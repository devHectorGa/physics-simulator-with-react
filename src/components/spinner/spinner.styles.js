import styled, { css } from 'styled-components';

const spinnerFullHeight = css`
  height: calc(100vh - var(--header-footer-size));
`;

export const SpinnerOverlay = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ height }) => (height ? `height: ${height}` : spinnerFullHeight)};
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 70px;
  height: 70px;
  border: 5px solid var(--gray1);
  border-radius: 50%;
  border-top-color: var(--accent);
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
