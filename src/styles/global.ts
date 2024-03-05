import { createGlobalStyle } from 'styled-components';
import { theme } from './themes';

export default createGlobalStyle`
  * {
    padding: ${theme.RANGE.NONE};
    margin: ${theme.RANGE.NONE};
    outline: none;
    box-sizing: border-box;
    text-decoration: none;
    letter-spacing: -0.015em;
  }
`;
