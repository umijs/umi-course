import React, { FC } from 'react';
import { HeroProps } from 'umi';
interface FreeHeroItemProps {
  data: HeroProps;
  thisIndex: number;
  onItemHover: (thisIndex: number) => void;
  itemHover: number;
}
const FreeHeroItem: FC<FreeHeroItemProps> = ({ data, thisIndex, onItemHover, itemHover }) => {
  if (!data || !data.ename) return null;

  return (
    <img
      onMouseEnter={() => {
        itemHover !== thisIndex && onItemHover(thisIndex);
      }}   //步骤7 需要
      style={{
        borderRadius: '5px',
        height: '69px',
        margin: '5px',
        width: itemHover === thisIndex ? '224px' : '69px',
      }}
      src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${data.ename}/${data.ename}${
        itemHover === thisIndex ? '-freehover.png' : '.jpg'
        }`}
    />
  );
}
export default FreeHeroItem
