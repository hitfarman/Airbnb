import { styled } from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #222;
  
  .title {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  .subtitle {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .arrow {
    margin-left: 8px;
  }

  .main-header:hover {
    cursor: pointer;
  }

`