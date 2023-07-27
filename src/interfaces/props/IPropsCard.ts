export interface IPropsCard {
  id?: string;
  title?: string;
  rating?: string;
  images: string[];
  options?: string[] | any;
  time: {
    id: string;
    time: string;
  }[];
  price?: {
    curPrice: string;
    prevPrice: string;
    salePercentage: string;
  };
  imgClassName?: string;
}
