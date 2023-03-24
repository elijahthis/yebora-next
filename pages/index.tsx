import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./styles/Home.module.scss";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode, useState } from "react";
import Button from "@/components/Button";
import TopBanner from "@/components/TopBanner";
import DashCard from "@/components/DashCard";
import { BsArrowUpShort } from "react-icons/bs";
import { BanknoteIcon, EmptyCampaignIcon } from "@/components/svgs";
import EmptyState from "@/components/EmptyState";
import RoundTabs from "@/components/RoundTabs";
import CampaignCard from "@/components/CampaignCard";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const router = useRouter();

	const [currentPage, setCurrentPage] = useState(0);
	const campaignList: {
		image: string;
		title: string;
		type: "Crowdfunding" | "Celebration" | "Community";
		description: string;
		progressPercent: number;
		amountRaised: number;
		daysLeft: number;
		numContributed: number;
	}[] = [
		{
			image: "/campaignImg.jpg",
			title: "Laptops for young school children",
			type: "Crowdfunding",
			description:
				"The Project for Awesome is a once-a-year charity event that combines community-created videos promoting nonprofits",
			progressPercent: 45,
			amountRaised: 500,
			daysLeft: 2,
			numContributed: 234,
		},
		{
			image: "/campaignImg.jpg",
			title: "Laptops for young school children",
			type: "Celebration",
			description:
				"The Project for Awesome is a once-a-year charity event that combines community-created videos promoting nonprofits",
			progressPercent: 45,
			amountRaised: 500,
			daysLeft: 2,
			numContributed: 234,
		},
		{
			image: "/campaignImg.jpg",
			title: "Laptops for young school children",
			type: "Community",
			description:
				"The Project for Awesome is a once-a-year charity event that combines community-created videos promoting nonprofits",
			progressPercent: 45,
			amountRaised: 500,
			daysLeft: 2,
			numContributed: 234,
		},
	];

	return (
		<div className={styles.Home}>
			<div className={styles.Home__top}>
				<div>
					<h3>
						<span className={styles.welcome}>Welcome</span>, <span className={styles.firstName}>Manuel</span> Chucho!{" "}
					</h3>
					<p>Let’s build a community filled with hope</p>
				</div>
				<Button
					variant="primary"
					onClick={() => router.push("/campaigns/create")}
				>
					Create Campaign
				</Button>
			</div>
			<div className={styles.Home__banner}>
				<TopBanner />
			</div>
			<div className={styles.Home__cards}>
				<DashCard
					icon={<BsArrowUpShort />}
					value={0}
					label="Total Campaigns Created"
				/>
				<DashCard
					icon={<BanknoteIcon />}
					value={0}
					label="Total Funds Raised"
					money={true}
				/>
			</div>
			<div className={styles.Home__body}>
				<div className={styles.Home__body__top}>
					<h3>Campaigns</h3>
					<RoundTabs
						tabList={["All", "Crowdfunding", "Celebration", "Community"]}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</div>
				<div className={styles.Home__body__content}>
					{campaignList.length === 0 ? (
						<EmptyState
							icon={<EmptyCampaignIcon />}
							message="No campaign created at this time!"
						/>
					) : (
						<div className={styles.campaignCards}>
							{campaignList.map((campaignItem, ind: number) => (
								<CampaignCard campaignData={campaignItem} key={ind} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

Home.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
