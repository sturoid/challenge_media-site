import { css } from 'emotion';

const userDetails = css`
  & > div:first-child {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & > div:not(first-child) {
    padding: 5px 0;
  }
`;

export default userDetails;
