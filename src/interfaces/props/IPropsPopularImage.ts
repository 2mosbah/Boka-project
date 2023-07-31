export default interface IPropsPopularImage {
  imgSrc: string;
  name: string;
  subName?: string;
  className?: string;
  backgroundImage?: any;
}

export enum className {
  BigElementClassName = "col-span-2 row-span-2",
}
