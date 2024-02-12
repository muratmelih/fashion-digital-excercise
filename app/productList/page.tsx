import Image from "next/image";
import styles from "./productList.module.css";
import { Card } from "primereact/card";
import { ProductType } from "../types";
import { Product } from "../components/Product/product";

export default async function ProductList() {
  const getData = async () => {
    const res = await fetch("http://localhost:3000/api/products?size=34", {
      next: { revalidate: 30 },
    });
    const data: ProductType[] = await res.json();
    const sizes: string[] = [];
    data.map((a) => {
      a.sizes.map((size) => {
        if (!sizes.includes(size)) sizes.push(size);
      });
    });
    return { data, sizes };
  };
  const { data } = await getData();
  return (
    <div className={styles.container}>
      {data.length
        ? data?.map((a) => {
            return <Product key={a.id} data={a}></Product>;
          })
        : null}
    </div>
  );
}
