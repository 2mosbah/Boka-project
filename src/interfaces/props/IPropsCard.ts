export interface IPropsCard {
  id?: number;
  title?: string;
  rating?: number | string;
  images: object[] | any[];
  options?:
    | {
        id: number;
        nameEn: string;
        price: string;
      }[]
    | string[];
  time?: {
    id: string;
    time: string;
  }[];
  price?: {
    curPrice: string;
    prevPrice: string;
    salePercentage: string;
  };
  className?: string;
  categoryId?: number;
  address?: any;
}
