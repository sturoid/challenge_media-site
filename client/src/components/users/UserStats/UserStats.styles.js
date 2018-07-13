import { css } from 'emotion';
import { greyMid } from '../../../lib/colors.styles';

const userStats = css`
  margin-top: 15px;
  > div {
    padding: 3px 0;
    display: flex;
    align-items: center;
    font-size: 13px;
    justify-content: space-between;
    & > div:first-child {
      display: flex;
      align-items: center;
    }
    .icon {
      color: ${greyMid};
      font-size: 20px;
    }
  }
`;

export default userStats;
