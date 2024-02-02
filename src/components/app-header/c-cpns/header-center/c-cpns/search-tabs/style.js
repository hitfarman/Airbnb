import styled from "styled-components";

export const TabsWrapper = styled.div`
  display: flex;
  color: ${props => props.theme.isAlpha ? "#fff": "#222"};

  .item {
    position: relative;
    width: 64px;
    height: 20px;
    margin: 10px 16px;
    font-size: 16px;
    cursor: pointer;

    &.active .bottom {
      position: absolute;
      top: 28px;
      left: 0;
      width: 64px;
      height: 2px;
      background-color: ${props => props.theme.isAlpha ? "#fff": "#333"};
    }

    ${props => props.theme.mixin.disableSelect};
    /* .disable-select {
      -webkit-user-select: none;  
      -moz-user-select: none;    
      -ms-user-select: none;      
      user-select: none;
    } */
  }
`