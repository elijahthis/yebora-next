import AboutCampaign from "@/components/CampaignDetailsComponents/AboutCampaign";
import CampaignHero from "@/components/CampaignHero";
import GreyCard from "@/components/GreyCard";
import MUITabs from "@/components/MUITabs";
import TabPanel from "@/components/MUITabs/TabPanel";
import { AiOutlineLink } from "react-icons/ai";
import { BankIcon } from "@/components/svgs";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode, useState } from "react";
import styles from "../styles/CampaignDetails.module.scss";
import ProfileImage from "@/components/ProfileImage";
import ContributionRow from "@/components/ContributionRow";
import CommentSection from "@/components/CampaignDetailsComponents/CommentSection";
import NoticeBoard from "@/components/CampaignDetailsComponents/NoticeBoard";
import Document from "@/components/CampaignDetailsComponents/Document";
import AccountCard from "@/components/AccountCard";
import ContributionCard from "@/components/ContributionCard";

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
		{
			label: "About Campaign",
			value: "about-campaign",
			component: <AboutCampaign />,
		},
		{
			label: "Comments",
			value: "comments",
			component: <CommentSection />,
			unread: 5,
		},
		{
			label: "Notice Board",
			value: "notice-board",
			component: <NoticeBoard />,
			unread: 0,
		},
		{ label: "Document", value: "document", component: <Document /> },
	];

	const contributionList = [
		{
			initials: "KJ",
			email: "kingsleijeo@gmail.com",
			amount: 500,
			time: "2h ago",
		},
		{
			initials: "BO",
			email: "kingsleijeo@gmail.com",
			amount: 500,
			time: "2h ago",
		},
		{
			initials: "MW",
			email: "kingsleijeo@gmail.com",
			amount: 500,
			time: "2h ago",
		},
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
				<div>
					<MUITabs tabList={tabList} value={value} setValue={setValue} />
					{tabList.map((item, ind) => (
						<TabPanel value={value} index={ind} key={ind}>
							{item.component}
						</TabPanel>
					))}
				</div>
				<div className={styles.sideCards}>
					<AccountCard />
					<ContributionCard />
				</div>
			</div>
		</main>
	);
};

export default CampaignDetails;

CampaignDetails.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
