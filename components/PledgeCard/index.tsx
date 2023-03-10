import styles from "./PledgeCard.module.scss";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import ProgressBar from "../ProgressBar";

interface PledgeCardProps {
	campaignData: {
		title: string;
		type: "Crowdfunding" | "Celebration" | "Community";
		progressPercent: number;
		amountPledged: number;
		amountPaid: number;
		daysLeft: number;
		datePledged: string;
	};
}

const PledgeCard = ({ campaignData }: PledgeCardProps) => {
	return (
		<div className={styles.PledgeCard}>
			<div className={styles.PledgeCard__tag}>
				<p
					style={{
						color:
							campaignData.type === "Celebration"
								? "#B54708"
								: campaignData.type === "Crowdfunding"
								? "#175CD3"
								: "#027A48",
						backgroundColor:
							campaignData.type === "Celebration"
								? "#FFFAEB"
								: campaignData.type === "Crowdfunding"
								? "#EFF8FF"
								: "#ECFDF3",
					}}
				>
					{campaignData.type}
				</p>
			</div>
			<h5 className={styles.PledgeCard__title}>{campaignData.title}</h5>
			<div className={styles.PledgeCard__spaceBetween}>
				<p>
					Amount Pledged <span>${campaignData.amountPledged}</span>
				</p>
				<p>{campaignData.datePledged}</p>
			</div>
			<div className={styles.PledgeCard__spaceBetween}>
				<p className={styles.PledgeCard__amountRaised}>
					<span>${campaignData.amountPaid}</span> Raised
				</p>
				<p className={styles.PledgeCard__progressPercent}>
					{campaignData.progressPercent}%
				</p>
			</div>
			<div className={styles.PledgeCard__progress}>
				<ProgressBar val={campaignData.progressPercent} />
			</div>
			<div className={styles.PledgeCard__spaceBetween}>
				<p className={styles.PledgeCard__amountRaised}>
					<span>Redeemed ${campaignData.amountPaid}</span>
				</p>
				<p className={styles.PledgeCard__amountRaised}>
					<span>
						Balance ${campaignData.amountPledged - campaignData.amountPaid}
					</span>
				</p>
			</div>
			<div className={styles.PledgeCard__buttons}>
				<button
					className={`${styles.PledgeCard__buttons__button} ${styles["PledgeCard__buttons__button--outline"]}`}
					data-size="Top Up"
				></button>
				<button className={styles.PledgeCard__buttons__button}>Redeem</button>
			</div>
		</div>
	);
};

export default PledgeCard;
