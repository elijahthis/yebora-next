import styles from "./CampaignHero.module.scss";
import Image from "next/image";
import Tag from "../Tag";
import { BiTimeFive } from "react-icons/bi";
import ProfileImage from "../ProfileImage";
import Button from "../Button";
import ProgressBar from "../ProgressBar";

interface CampaignHeroProps {
	data: {
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

const CampaignHero = ({ data }: CampaignHeroProps) => {
	return (
		<section className={styles.CampaignHero}>
			<div className={styles.CampaignHero__image}>
				<Image src={data.image} alt="campaign" fill />
			</div>
			<div className={styles.CampaignHero__right}>
				<div className={styles.tagTime}>
					<Tag type={data.type} />
					<div className={styles.tagTime__line}></div>
					<div className={styles.tagTime__time}>
						<BiTimeFive color="#39BD78" size={20} />
						<p>
							Duration: <span>28days</span>
						</p>
					</div>
				</div>
				<h2>{data.title}</h2>
				<div className={styles.profile}>
					<ProfileImage
						url="/profileImg.jpeg"
						alt="profile"
						width={40}
						height={40}
					/>
					<div className={styles.profile__text}>
						<p>CRUSTSOCKS PRODUCTIONS LLC</p>
						<p>Created 23days ago</p>
					</div>
				</div>
				<div className={styles.progressBlock}>
					<div>
						<p className={styles.progressBlock__raised}>
							<span>$18,295</span> Raised
						</p>
						<p className={styles.progressBlock__target}>
							<span>Target</span> $200,000
						</p>
					</div>
					<ProgressBar val={data.progressPercent} height={10} />
					<div>
						<p className={styles.progressBlock__flexible}>Flexible Payment</p>
						<p className={styles.progressBlock__daysLeft}>
							<span>{data.daysLeft}</span> days left
						</p>
					</div>
				</div>
				<div className={styles.btnWrap}>
					<Button variant="blueOutline" dataSize="Pledge">
						<></>
					</Button>
					<Button>Donate</Button>
				</div>
			</div>
		</section>
	);
};

export default CampaignHero;
