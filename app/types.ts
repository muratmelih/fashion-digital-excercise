export type ProductType = {
    id: string;
    brand: string;
    description: string;
    priceO: number;
    priceR: number | null;
    url: string;
    images: string[];
    sizes: string[];
  };

  export type ProductPropType={
    key:string;
    data:ProductType
  }