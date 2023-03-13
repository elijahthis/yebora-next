import { IoMdArrowForward } from "react-icons/io";
import { WhitishEllipse } from "../svgs";
import styles from "./CampaignTypeCard.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

interface CampaignTypeCardProps {
	cardData: {
		title: string;
		desc: string;
		btnLink: string;
		illustration: string;
		bg: string;
	};
}

const CampaignTypeCard = ({ cardData }: CampaignTypeCardProps) => {
	const { title, desc, btnLink, illustration, bg } = cardData;
	const router = useRouter();
	return (
		<div style={{ backgroundColor: bg }} className={styles.CampaignTypeCard}>
			<div className={styles.CampaignTypeCard__illustration}>
				<div>
					<Image
						src={illustration}
						height={208}
						width={208}
						alt="illustration"
					/>
				</div>
			</div>
			<div className={styles.mainWrap}>
				<h2>{title}</h2>
				<p>{desc}</p>
				<div className={styles.btnWrap}>
					<button onClick={() => router.push(btnLink)}>
						<span>Get Started</span>
						<IoMdArrowForward />
					</button>
				</div>
			</div>
			<WhitishEllipse />
		</div>
	);
};

export default CampaignTypeCard;
