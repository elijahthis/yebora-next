import { TbLoader } from "react-icons/tb";
import styles from "./LoadMore.module.scss";

const LoadMore = () => {
	return (
		<div className={styles.LoadMore}>
			<TbLoader size={24} />
			<p>Load more</p>
		</div>
	);
};

export default LoadMore;
