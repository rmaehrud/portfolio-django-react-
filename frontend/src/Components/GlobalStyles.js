import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    *{
        box-sizing:border-box;
    }
    min-width: 992px {

    }
    body{
    font-family: "Work Sans", Arial, sans-serif;
    font-size: 18px;
    line-height: 34px;
    background: #222222;
    font-weight: 300;
    color: #222;
    }
    p {
        display: block;
        margin-block-start: 1em;
        margin-block-end: 1em;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
`;

export default globalStyles;
