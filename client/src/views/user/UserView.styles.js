import { css } from 'emotion';
import { mobileWidth } from '../../lib/media.styles';

export const aside = css`
  display: block;
  @media (min-width: ${mobileWidth}) {
    margin-right: 1%;
    width: 20%;
  }
`;

export const main = css`
  @media (min-width: ${mobileWidth}) {
    width: 79%;
  }
`;
