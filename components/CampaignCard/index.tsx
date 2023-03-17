import styles from "./CampaignCard.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { BiTimeFive } from "react-icons/bi";
import ProgressBar from "../ProgressBar";
import Tag from "../Tag";

interface CampaignCardProps {
	campaignData: {
		image: string;
		title: string;
		type: "Crowdfunding" | "Celebration" | "Community";
		description: string;
		progressPercent: number;
		amountRaised: number;
		daysLeft: number;
		numContributed: number;
	};
}

const CampaignCard = ({ campaignData }: CampaignCardProps) => {
	const router = useRouter();

	return (
		<div
			className={styles.CampaignCard}
			onClick={() => router.push("campaigns/1")}
		>
			<div className={styles.CampaignCard__image}>
				<Image
					src={campaignData.image}
					alt="campaign image"
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<div className={styles.CampaignCard__tag}>
				<Tag type={campaignData.type} />
			</div>
			<h5 className={styles.CampaignCard__title}>{campaignData.title}</h5>
			<p className={styles.CampaignCard__desc}>{campaignData.description}</p>
			<div className={styles.CampaignCard__spaceBetween}>
				<p className={styles.CampaignCard__amountRaised}>
					<span>${campaignData.amountRaised}</span> Raised
				</p>
				<p className={styles.CampaignCard__progressPercent}>
					{campaignData.progressPercent}%
				</p>
			</div>
			<div className={styles.CampaignCard__progress}>
				<ProgressBar val={campaignData.progressPercent} height={6} />
			</div>
			<div className={styles.CampaignCard__spaceBetween}>
				<div className={styles.CampaignCard__time}>
					<BiTimeFive color="#39BD78" size={12} />
					<span>{campaignData.daysLeft} days left</span>
				</div>
				<p>{campaignData.numContributed} Contributed</p>
			</div>
		</div>
	);
};

export default CampaignCard;
