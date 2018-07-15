import { css } from 'emotion';

const follower = css`
  display: flex;
  align-items: center;
  & > div {
    width: 200px;
    padding-left: 10px;
  }
  & > div:not(:first-child) {
    padding-top: 10px;
  }
`;

export default follower;
