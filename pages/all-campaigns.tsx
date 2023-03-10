import Banner from "@/components/Banner";
import Button from "@/components/Button";
import CampaignCard from "@/components/CampaignCard";
import EmptyState from "@/components/EmptyState";
import LoadMore from "@/components/LoadMore";
import SortBy from "@/components/SortBy";
import { EmptyCampaignIcon } from "@/components/svgs";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode } from "react";
import styles from "./styles/AllCampaigns.module.scss";

const AllCampaigns = () => {
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
		<div className={styles.AllCampaigns}>
			<div className={styles.AllCampaigns__top}>
				<h3>All Campaigns</h3>
				<Button variant="primary">Create Campaign</Button>
			</div>
			<div className={styles.AllCampaigns__banner}>
				<Banner />
			</div>
			<div className={styles.AllCampaigns__body}>
				<div className={styles.AllCampaigns__sortBy}>
					<SortBy />
				</div>
				<div className={styles.campaign}>
					<h3 className={styles.campaign__title}>New Campaigns</h3>
					<div className={styles.campaign__content}>
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
				<div className={styles.campaign}>
					<h3 className={styles.campaign__title}>Popular Projects</h3>
					<div className={styles.campaign__content}>
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
					<div className={styles.campaign__more}>
						<LoadMore />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AllCampaigns;

AllCampaigns.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
