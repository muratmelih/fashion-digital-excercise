import { ProductPropType, ProductType } from "../../types";
import { Card } from "primereact/card";
import Image from "next/image";
import styles from "./product.module.css";
import Link from "next/link";
import { ScrollPanel } from "primereact/scrollpanel";

export const Product = (props: ProductPropType) => {
  const { data } = props;
  return (
    <Link href={data.url} target="_blank" className={styles.productCard}>
      <Card>
        <Image
          src={data.images[0]}
          width={300}
          height={300}
          alt={data.description}
        ></Image>
        <div>
          <div className={styles.productTitle}>{data.description}</div>
          <div className={styles.productBrand}>{data.brand}</div>
          {data.priceR ? (
            <div className={styles.price}><span className={styles.priceOld}>${data.priceO}</span><span>${data.priceR}</span></div>
          ) : (
            <div className={styles.price}>${data.priceO}</div>
          )}

          <div className={styles.productSizeContainer}>
            Available Sizes:
            <ScrollPanel
              style={{
                width: "100%",
                height: "60px",
                maxWidth: "250px",
                marginTop: "5px",
                padding: "5px 0",
              }}
            >
              <div className={styles.productSizeWrapper}>
                {data.sizes.map((a) => {
                  return (
                    <div key={a} className={styles.productSize}>
                      {a}
                    </div>
                  );
                })}
              </div>
            </ScrollPanel>
          </div>
        </div>
      </Card>
    </Link>
  );
};
