import Analytics from "@/components/AnalyticsComponents/Analytics";
import NoticeBoard from "@/components/CampaignDetailsComponents/NoticeBoard";
import RoundTabs from "@/components/RoundTabs";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode, useState } from "react";
import styles from "../styles/CampaignAnalytics.module.scss";

const CampaignAnalytics = () => {
	const [currentPage, setCurrentPage] = useState(0);

	const renderContent = () => {
		switch (currentPage) {
			case 0:
				return <Analytics />;
				break;
			case 1:
				return <Analytics />;
				break;
			case 2:
				return <Analytics />;
				break;
			case 3:
				return <NoticeBoard />;
				break;
			case 4:
				return <Analytics />;
				break;
			case 5:
				return <Analytics />;
				break;

			default:
				break;
		}
	};

	return (
		<div className={styles.CampaignAnalytics}>
			<TitleNav
				title="Laptops for young school children"
				variant="button"
				buttonObj={{ label: "Disburse Payment", action: () => {} }}
			/>
			<div className={styles.CampaignAnalytics__body}>
				<RoundTabs
					tabList={[
						"Analytics",
						"Team Members",
						"Beneficiary",
						"Activities",
						"Pledges",
						"Payment History",
					]}
					currentPage={currentPage}
					setCurrentPage={setCurrentPage}
				/>
				<div className={styles.CampaignAnalytics__renderContent}>
					{renderContent()}
				</div>
			</div>
		</div>
	);
};

export default CampaignAnalytics;

CampaignAnalytics.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
