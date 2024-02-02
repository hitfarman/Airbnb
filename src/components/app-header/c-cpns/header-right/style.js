import { styled } from "styled-components";

export const RightWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  color: ${props => props.theme.text.primaryColor};
  font-weight: 400;

  .btns {
    display: flex;
    align-items: center;
    color: ${props => props.theme.isAlpha ? "#fff": props.theme.text.primaryColor};

    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      cursor: pointer;
      border-radius: 22px;
      
      &:hover {
        background-color: ${props => props.theme.isAlpha ? "rgba(255,255,255,.1)": "#f5f5f5"};
      }
    }

    .btn.glb {
      position: relative;
      left: -10px;
    }
  }

  .profile {
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 77px;
    height: 42px;
    margin-right: 24px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    color: ${props => props.theme.text.primaryColor};
    cursor: pointer;

    ${props => props.theme.mixin.boxShadow};

    .panel {
      position: absolute;
      top: 52px;
      right: 0;
      width: 240px;
      /* height: 240px; 高度由内容撑起 */
      background-color: #fff;
      border-radius: 15px;
      box-shadow: 0 0 15px rgba(0,0,0,.08);
      color: #222;
      font-weight: 400;

      .top, .bottom {
        padding: 10px 0;
        .item {
          height: 40px;
          line-height: 40px;
          padding: 0 16px;

          &:hover {
            background-color: #f5f5f5;
          }
        }
      }

      .top {
        .login {
          font-weight: 600;
        }
        border-bottom: 1px solid #ddd;
      }
    }
  }
`