import { styled } from "styled-components";

export const BrowserWrapper = styled.div`
  position: fixed;
  z-index: 999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;

  background-color: #333;

  .top {
    position: relative;
    height: 86px;

    .close-btn {
      position: absolute;
      top: 15px;
      right: 25px;
      cursor: pointer;
    }
  }

  .slider {
    position: relative;
    flex: 1;
    display: flex;
    justify-content: center;

    .control {
      position: absolute;
      z-index: 1;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      display: flex;
      justify-content: space-between;
      color: #fff;

      .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 83px;
        height: 100%;
        cursor: pointer;
      }
    }

    .picture {
      position: relative;
      height: 100%;
      overflow: hidden;
      width: 100%;
      max-width: 105vh;     // 最大宽度跟高度有关

      img {
        /* 如果不搞绝对定位,在做动画切换的时候, 图片之间会有挤压的效果 */
        position: absolute; // 绝对定位, 让img居中, 目的:让图片在中间. 
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        height: 100%;
        user-select: none;
      }

      /* 动画的样式 */
      .pic-enter {
        /* transform: translateX(100%); // 进入时,起始位置在100%位置 */
        transform: translateX(${props => props.isNext? "100%" : "-100%"}); // 进入时,起始位置在100%位置
        opacity: 0; // 进入时,起始位置是透明的
      }

      .pic-enter-active {
        transform: translateX(0); // 回到最开始应该在的位置
        opacity: 1;
        transition: all 500ms ease;
      }

      .pic-exit { // 离开时只有过渡动画,没有位移动画
        opacity: 1;
      }

      .pic-exit-active {
        opacity: 0;
        transition: all 500ms ease;
      }
    }
  }

  .preview {
    display: flex;
    justify-content: center;
    height: 100px;
    margin-top: 10px;

    .info {
      position: absolute;
      bottom: 10px;
      max-width: 105vh;
      color: #fff;

      .desc {
        display: flex;
        justify-content: space-between;

        .toggle {
          cursor: pointer;
        }
      }

      .list {
        margin-top: 3px;
        overflow: hidden;
        transition: height 300ms ease;
        height: ${props => props.showDesc ? "67px" : "0"};

        .item {
          margin-right: 15px;
          cursor: pointer;

          img {
            height: 67px;
            opacity: 0.5;
          }

          &.active {
            img {
              opacity: 1;
            }
          }
        }
      }
    }
    
  }

`