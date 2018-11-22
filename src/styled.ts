import {createGlobalStyle} from 'styled-components';
import styledNormalize from 'styled-normalize';

export const InjectGlobal = createGlobalStyle`
  ${styledNormalize}

  /* Global Styles */
  html, body {
    background-color: #efefef;
    width: 100%;
    height: 100%
  }
  body {
    background-color: #efefef;
  }
`;