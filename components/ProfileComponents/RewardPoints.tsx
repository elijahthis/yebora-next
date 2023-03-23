import Button from "../Button";
import styles from "./ProfileComponents.module.scss";
import Image from "next/image";

const RewardPoints = () => {
	return (
		<div className={styles.RewardPoints}>
			<Image src={"/coin.svg"} alt="coin" width={144} height={97} />
			<p className={styles.RewardPoints__total}>Total Reward Points</p>
			<p className={styles.RewardPoints__val}>78</p>
			<p className={styles.RewardPoints__desc}>
				You can only claim your reward points when you have up to 1000 points
			</p>
			<Button variant="primary">Claim Reward</Button>
		</div>
	);
};

export default RewardPoints;
