import { ProductType, statisticsReportResult } from "../types";
import styles from "./statistics.module.css";
import { Chart } from "primereact/chart";

export default async function Statistics(props: any) {
  const getData = async () => {
    const res = await fetch(`http://localhost:3000/api/statistics`, {
      next: { revalidate: 3 },
    });
    const data: statisticsReportResult = await res.json();
    return data;
  };
  const statisticsData: statisticsReportResult = await getData();
  const less40Data = {
    labels: statisticsData.lessThan40.map((a) => a.brand),
    datasets: [
      {
        label: "Number of products lass than 40$",
        data: statisticsData.lessThan40.map((a) => a.count),
      },
    ],
  };

  const sizeCountData = {
    labels: statisticsData.sizeCount.map((a) => a.brand),
    datasets: [
      {
        label: "Largest selection of sizes",
        data: statisticsData.sizeCount.map((a) => a.count),
      },
    ],
  };

  const size32AvgData = {
    labels: statisticsData.size32Price.map((a) => a.brand),
    datasets: [
      {
        label: "Avg price for size 32",
        data: statisticsData.size32Price.map((a) => a.count),
      },
    ],
  };

  return (
    <div className={styles.container}>
      <div className={styles.chartContainer}>
        <h4>
          Brand has most products cost less than 40$ :{" "}
          {statisticsData.lessThan40[0].brand}
        </h4>
        <Chart className="w-full" type="bar" data={less40Data} />
      </div>

      <div className={styles.chartContainer}>
        <h4>
          Brand has most largest selection of sizes :{" "}
          {statisticsData.sizeCount[0].brand}
        </h4>
        <Chart className="w-full" type="bar" data={sizeCountData} />
      </div>

      <div className={styles.chartContainer}>
        <h4>
         Lowest avg price for size 32 :{" "}
          {statisticsData.size32Price[0].brand}
        </h4>
        <Chart className="w-full" type="bar" data={size32AvgData} />
      </div>
    </div>
  );
}
