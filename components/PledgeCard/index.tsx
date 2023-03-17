import styles from "./PledgeCard.module.scss";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import { BsCheckCircleFill } from "react-icons/bs";
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
				<BsCheckCircleFill size={15} color="#39BD78" />
			</div>
			<h5 className={styles.PledgeCard__title}>{campaignData.title}</h5>
			<div className={styles.PledgeCard__pledgeRow}>
				<p>
					Amount Pledged <span>${campaignData.amountPledged}</span>
				</p>
				<p>{campaignData.datePledged}</p>
			</div>
			<div className={styles.PledgeCard__progressStuff}>
				<p className={styles.PledgeCard__amountRaised}>Pledge progress</p>
				<p className={styles.PledgeCard__progressPercent}>
					{campaignData.progressPercent}%
				</p>
			</div>
			<div className={styles.PledgeCard__progress}>
				<ProgressBar val={campaignData.progressPercent} height={6} />
			</div>
			<div className={styles.PledgeCard__moneyStuff}>
				<p>
					Redeemed <span>${campaignData.amountPaid}</span>
				</p>
				<p>
					Balance{" "}
					<span>${campaignData.amountPledged - campaignData.amountPaid}</span>
				</p>
			</div>
			<p className={styles.PledgeCard__transactions}>Transactions</p>
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
