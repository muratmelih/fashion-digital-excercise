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

export type ProductPropType = {
  key: string;
  data: ProductType;
};

export type statisticsProdReportType = {
  brand: string;
  count: number;
};

  export type statisticsReportResult={
    lessThan40:statisticsProdReportType[];
    sizeCount:statisticsProdReportType[];
    size32Price:statisticsProdReportType[];
  }