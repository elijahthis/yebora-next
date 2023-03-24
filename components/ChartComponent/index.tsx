import Image from "next/image";
import styles from "./ChartComponent.module.scss";

const ChartComponent = () => {
	return (
		// <div className={styles.ChartComponent}>
		<Image
			src="/chart-img.svg"
			layout="responsive"
			alt="chart"
			width={818}
			height={498}
		/>
		// {/* </div> */}
	);
};

export default ChartComponent;
