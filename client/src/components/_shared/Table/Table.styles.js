import { css } from 'emotion';
import { greyLight, greyLighter } from '../../../lib/colors.styles';
import { mobileWidth } from '../../../lib/media.styles';

export const tableResponsive = css`
  overflow-x: auto;
`;

export const table = css`
  margin: 0 auto;
  padding: 0;
  width: 100%;
  thead {
    border-bottom: 1px solid ${greyLighter};
    th {
      color: ${greyLight};
      padding: 10px;
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid ${greyLighter};
      transition: background-color 0.2s ease;
      &:hover {
        background-color: RGBA(78, 149, 177, 0.1);
        cursor: pointer;
      }
      td {
        text-align: center;
        padding: 10px 0;
        @media (min-width: ${mobileWidth}) {
          text-align: left;
        }
      }
    }
  }
`;
