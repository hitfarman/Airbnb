import { styled } from "styled-components";

export const RoomsWrapper = styled.div`
  position: relative;
  padding: 20px;
  margin-top: 128px;

  .title {
    font-size: 22px;
    font-weight: 600;
    color: #222;
    margin-bottom: 10px;
  }

  .room-list {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
  }

  > .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255,255,255,.8);
  }
`