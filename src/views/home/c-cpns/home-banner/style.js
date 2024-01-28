import { styled } from "styled-components";
import coverImg from '@/assets/img/cover_01.jpeg'

export const BannerWrapper = styled.div`
  /* position: relative; */
  /* left: -50%; */
  /* transform: translateX(50%); */

  height: 529px;
  /* 设置 background 引入图片, 方式一 */
  /* background: url(${coverImg}) center/cover; */

  /* 设置 background 引入图片, 方式二, 通过require()引入, 
    这是一个js代码,需要使用模板变量, 返回的是一个对象
  */
  background: url(${require("@/assets/img/cover_01.jpeg")}) center/cover;
`