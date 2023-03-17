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
		{ label: "Comments", value: "comments", component: <></>, unread: 5 },
		{
			label: "Notice Board",
			value: "notice-board",
			component: <></>,
			unread: 0,
		},
		{ label: "Document", value: "document", component: <></> },
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
						<TabPanel value={value} index={ind}>
							{item.component}
						</TabPanel>
					))}
				</div>
				<div className={styles.sideCards}>
					<GreyCard title="Account Details">
						<div className={styles.accountDets}>
							<BankIcon />
							<div>
								<p>LAPTOP FUNDS LTD</p>
								<p>FIRSTBANK OF NIGERIA PLC </p>
								<p>
									3094827647
									<AiOutlineLink color="#328BE0" size={18} />
								</p>
							</div>
						</div>
					</GreyCard>
					<GreyCard title="Contributions">
						<div className={styles.contributions}>
							{contributionList.map((contribItem) => (
								<ContributionRow data={contribItem} />
							))}
						</div>
					</GreyCard>
				</div>
			</div>
		</main>
	);
};

export default CampaignDetails;

CampaignDetails.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
