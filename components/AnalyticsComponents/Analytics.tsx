import AccountCard from "../AccountCard";
import ChartComponent from "../ChartComponent";
import ContributionCard from "../ContributionCard";
import DashCardCol from "../DashCardCol";
import { AmountIcon, BalanceIcon, PledgeIcon, RedeemIcon } from "../svgs";
import styles from "./AnalyticsComponents.module.scss";

const Analytics = () => {
	const pledgeDashCards = [
		{
			label: "No of Pledges",
			value: 0,
			icon: <PledgeIcon />,
			bg: "url(/dash-col-bg1.png)",
			money: false,
		},
		{
			label: "Total Amount",
			value: 0,
			icon: <AmountIcon />,
			bg: "url(/dash-col-bg2.png)",
			money: true,
		},
		{
			label: "Redeemed pledges",
			value: 0,
			icon: <RedeemIcon />,
			bg: "url(/dash-col-bg3.png)",
			money: true,
		},
		{
			label: "Balance",
			value: 0,
			icon: <BalanceIcon />,
			bg: "url(/dash-col-bg4.png)",
			money: true,
		},
	];

	return (
		<section className={styles.Analytics}>
			<div className={styles.Analytics__cards}>
				{pledgeDashCards.map((pledgeItem, ind) => (
					<DashCardCol
						icon={pledgeItem.icon}
						value={pledgeItem.value}
						label={pledgeItem.label}
						bg={pledgeItem.bg}
						money={pledgeItem.money}
						key={ind}
					/>
				))}
			</div>
			<div className={styles.Analytics__rest}>
				<h3>Recent Activities</h3>
				<div className={styles.Analytics__grid}>
					<div className={styles.leftChart}>
						<ChartComponent />
					</div>
					<div className={styles.sideCards}>
						<AccountCard />
						<ContributionCard />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Analytics;
