import { css } from 'emotion';
import { greyDark, white } from '../../lib/colors.styles';

export const header = css`
  background-color: ${greyDark};
  color: ${white};
  padding: 10px 0;
`;

export const h1 = css`
  font-weight: normal;
  font-size: 1.3rem;
  margin: 0;
`;

export const navItems = css`
  display: flex;
  align-items: center;
`;

export const navLink = css`
  color: white;
  text-decoration: none;
  padding: 0 20px;
`;
