import styles from "./TopBanner.module.scss";
import { SlClose } from "react-icons/sl";

const TopBanner = () => {
	return (
		<div className={styles.TopBanner}>
			<div className={styles.TopBanner__left}>
				<SlClose color="#EF4444" />
				<p className={styles.TopBanner__left__txt}>
					<span>
						ID Verification <span style={{ color: "#FF8888" }}>(80%)</span>
					</span>
					<span>Complete your ID verification to access full feature</span>
				</p>
			</div>
			<button>Complete Now</button>
		</div>
	);
};

export default TopBanner;
