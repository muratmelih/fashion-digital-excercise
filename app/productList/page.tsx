import styles from "./productList.module.css";
import { ProductType } from "../types";
import { Product } from "../components/Product/product";
import { SizeFilter } from "../components/Filters/sizeFilter";
import { PriceSort } from "../components/Filters/priceSort";
import { ClearFilters } from "../components/Filters/clearFilters";
import { Filters } from "../components/Filters/filters";

export default async function ProductList(props: any) {
  const getData = async () => {
    const size = props.searchParams.sizes;
    const sortPrice = props.searchParams.sortPrice;
    const res = await fetch(
      `http://localhost:3000/api/products?size=${size}&sortPrice=${sortPrice}`,
      {
        next: { revalidate: 3 },
      }
    );
    const data: ProductType[] = await res.json();
    return  data;
  };

  const getSizes = async () => {
    const res = await fetch(
      `http://localhost:3000/api/sizes`,
      {
        next: { revalidate: 3 },
      }
    );
    const data: string[] = await res.json();
    return  data;
  };
  const data = await getData();
  const sizes = await getSizes();
  return (
    <div className={styles.container}>
      <div className={styles.filterContainer}>
      <Filters sizes={sizes}/>
      </div>
      {data.length
        ? data?.map((a) => {
            return (
              <Product
                key={a.id}
                data={a}
              ></Product>
            );
          })
        : null}
    </div>
  );
}
