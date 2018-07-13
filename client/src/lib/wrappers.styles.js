import { css } from 'emotion';
import { mobileWidth } from './media.styles';

export const flexWrapper = css`
  @media (min-width: ${mobileWidth}) {
    display: flex;
    flex-wrap: wrap;
  }
`;

export const wrapper600 = css`
  margin: 0 auto;
  max-width: 100%;
  width: 600px;
`;

export const wrapper1024 = css`
  margin: 0 auto;
  max-width: 100%;
  width: 1024px;
`;
