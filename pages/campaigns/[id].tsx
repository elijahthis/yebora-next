import CampaignHero from "@/components/CampaignHero";
import MUITabs from "@/components/MUITabs";
import TabPanel from "@/components/MUITabs/TabPanel";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode, useState } from "react";
import styles from "../styles/CampaignDetails.module.scss";

const CampaignDetails = () => {
	const campaignData: {
		image: string;
		title: string;
		type: "Crowdfunding" | "Celebration" | "Community";
		description: string;
		progressPercent: number;
		amountRaised: number;
		daysLeft: number;
		numContributed: number;
	} = {
		image: "/campaignImg.jpg",
		title: "Laptops for young school children",
		type: "Crowdfunding",
		description:
			"The Project for Awesome is a once-a-year charity event that combines community-created videos promoting nonprofits",
		progressPercent: 45,
		amountRaised: 500,
		daysLeft: 2,
		numContributed: 234,
	};

	const tabList = [
		{ label: "About Campaign", value: "about-campaign", component: <></> },
		{ label: "Comments", value: "comments", component: <></> },
		{ label: "Notice Board", value: "notice-board", component: <></> },
		{ label: "Document", value: "document", component: <></> },
	];

	const [value, setValue] = useState<number>(0);

	return (
		<main className={styles.CampaignDetails}>
			<TitleNav
				variant="breadcrumb"
				title="All Campaigns"
				breadCrumbArray={[
					{ label: "Home", link: "/" },
					{ label: "Campaign", link: "/campaigns" },
				]}
			/>
			<div className={styles.CampaignDetails__hero}>
				<CampaignHero data={campaignData} />
			</div>
			<div className={styles.CampaignDetails__rest}>
				<MUITabs tabList={tabList} value={value} setValue={setValue} />
				{tabList.map((item, ind) => (
					<TabPanel value={value} index={ind}>
						{item.component}
					</TabPanel>
				))}
			</div>
		</main>
	);
};

export default CampaignDetails;

CampaignDetails.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
