import CampaignTypeCard from "@/components/CampaignTypeCard";
import {
	CelebrationCampaignCardIcon,
	CommunityContributionCardIcon,
	CrowdFundingCardIcon,
} from "@/components/svgs";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode } from "react";
import styles from "../../styles/CreateCampaign.module.scss";

const CreateCampaign = () => {
	const campaignTypeList = [
		{
			title: "Crowdfunding Campaign",
			desc: "Be the Difference: Support Our Crowdfunding Campaign and Change Lives!",
			btnLink: "/campaigns/create/details?type=crowdfunding",
			bg: "#C2DCF6",
			illustration: "/crowdfunding-icon.svg",
		},
		{
			title: "Community Contribution",
			desc: "United We Contribute, Stronger We Build: Let's Make Our Community Thrive Together!",
			btnLink: "/campaigns/create/details?type=community",
			bg: "#B1D9C4",
			illustration: "/community-contribution-icon.svg",
		},
		{
			title: "Celebration Campaign",
			desc: "Let's Raise a Toast to Life's Best Moments: Celebrate with Friends & Family!",
			btnLink: "/campaigns/create/details?type=celebration",
			bg: "#C2DCF6",
			illustration: "/celebration-campaign-icon.svg",
		},
	];

	return (
		<div className={styles.CreateCampaign}>
			<TitleNav
				variant="breadcrumb"
				title="Create Campaign"
				breadCrumbArray={[
					{ label: "Home", link: "/" },
					{ label: "Create Campaign", link: "/campaigns/create" },
				]}
			/>
			<div className={styles.CreateCampaign__body}>
				<div className={styles.titleDesc}>
					<h2>Campaign Type</h2>
					<p>Select a campaign type to get started</p>
				</div>
				<div className={styles.cards}>
					{campaignTypeList.map((typeItem, ind) => (
						<CampaignTypeCard cardData={typeItem} key={ind} />
					))}
				</div>
			</div>
		</div>
	);
};

export default CreateCampaign;

CreateCampaign.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
