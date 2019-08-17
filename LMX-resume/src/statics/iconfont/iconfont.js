import { createGlobalStyle    } from 'styled-components';
export const IconfontStyle =createGlobalStyle `
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1564943634398'); /* IE9 */
  src: url('./iconfont.eot?t=1564943634398#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1564943634398') format('woff'),
  url('./iconfont.ttf?t=1564943634398') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1564943634398#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-shouji:before {
  content: "\e631";
}

.icon-wangluo:before {
  content: "\e6e7";
}

.icon-youxiang:before {
  content: "\e62c";
}

.icon-huiyuan:before {
  content: "\e650";
}

.icon-dingwei:before {
  content: "\e63e";
}

.icon-rili:before {
  content: "\e6b5";
}

`;