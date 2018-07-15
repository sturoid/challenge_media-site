import { css } from 'emotion';
import { mobileWidth } from '../../lib/media.styles';
import { greyLight, greyLighter } from '../../lib/colors.styles';

export const aside = css`
  display: block;
  padding: 0 10px;
  background: ${greyLighter};
  padding: 0 40px 40px 40px;
  @media (min-width: ${mobileWidth}) {
    border: 1px solid ${greyLight};
    margin-right: 1%;
    padding: 0 20px;
    width: 20%;
    height: 100vh;
  }
`;

export const main = css`
  @media (min-width: ${mobileWidth}) {
    width: 79%;
  }
`;
