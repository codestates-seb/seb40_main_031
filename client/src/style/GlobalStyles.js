import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  font-family: 'Poor Story', 'Do Hyeon', -apple-system,BlinkMacSystemFont,"Segoe UI Adjusted","Segoe UI","Liberation Sans",sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size : 15px;
}

body {
  background-color: #eee;
  width: 100vw;  
  height : 100vh;
  overflow-x: hidden;
  display : flex;
  flex-direction : column;


button {
  cursor: pointer;
}


.ReactQueryDevtoolsPanel {
  * {
    color : white;
  }

}

  .textViewer {
    margin: 0px !important;
    padding: 0px !important;
    font-size: 13px !important;
    word-spacing: 1px !important;
    word-break: break-all;
  }

}`;

export default GlobalStyles;
