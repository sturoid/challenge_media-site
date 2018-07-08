import { css } from 'emotion';
import { greyMid, greyLight, greyLighter } from '../../../lib/colors.styles';

const project = css`
  border: 1px solid ${greyLighter};
  border-radius: 5px;
  color: ${greyLight};
  display: block;
  margin: 5px;
  height: 300px;
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  @media (min-width: 600px) {
    flex: 1 0 20%;
    max-width: 246px;
  }
  .title {
    color: ${greyMid};
    font-size: 16px;
    padding: 8px 7px;
    text-align: center;
    height: 57px;
    padding: 10px 5px;
    box-sizing: border-box;
  }
  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 150px;
  }
  .published-date {
    color: ${greyMid};
    font-size: 13px;
    text-align: center;
  }
  .fields {
    padding: 10px 7px 0 7px;
    font-size: 12px;
  }
  .footer {
    border-top: 1px solid ${greyLighter};
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    width: 100%;
    div {
      display: flex;
      align-items: center;
      span {
        font-size: 14px;
      }
    }
  }
`;

export default project;
