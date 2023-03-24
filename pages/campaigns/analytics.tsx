import RoundTabs from "@/components/RoundTabs";
import TitleNav from "@/components/TitleNav";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode, useState } from "react";

const CampaignAnalytics = () => {
	const [currentPage, setCurrentPage] = useState(0);

	return (
		<div>
			<TitleNav
				title="Laptops for young school children"
				variant="button"
				buttonObj={{ label: "Disburse Payment", action: () => {} }}
			/>
			<div>
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
			</div>
		</div>
	);
};

export default CampaignAnalytics;

CampaignAnalytics.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
