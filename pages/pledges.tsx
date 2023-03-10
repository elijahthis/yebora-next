import DashCardCol from "@/components/DashCardCol";
import EmptyState from "@/components/EmptyState";
import SortBy from "@/components/SortBy";
import {
	AmountIcon,
	BalanceIcon,
	EmptyCampaignIcon,
	PledgeIcon,
	RedeemIcon,
} from "@/components/svgs";
import { RiSearch2Line } from "react-icons/ri";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode } from "react";
import styles from "./styles/Pledges.module.scss";
import PledgeCard from "@/components/PledgeCard";

const Pledges = () => {
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

	const pledgeList: {
		title: string;
		type: "Crowdfunding" | "Celebration" | "Community";
		progressPercent: number;
		amountPledged: number;
		amountPaid: number;
		daysLeft: number;
		datePledged: string;
	}[] = [
		{
			title: "Laptops for young school children",
			type: "Crowdfunding",
			progressPercent: 45,
			amountPledged: 20000,
			amountPaid: 500,
			daysLeft: 2,
			datePledged: "17, Sept 2022",
		},
		{
			title: "Laptops for young school children",
			type: "Celebration",
			progressPercent: 45,
			amountPledged: 20000,
			amountPaid: 500,
			daysLeft: 2,
			datePledged: "17, Sept 2022",
		},
		{
			title: "Laptops for young school children",
			type: "Community",
			progressPercent: 45,
			amountPledged: 20000,
			amountPaid: 500,
			daysLeft: 2,
			datePledged: "17, Sept 2022",
		},
	];

	return (
		<div className={styles.Pledges}>
			<div className={styles.Pledges__top}>
				<h3>Pledges</h3>
			</div>
			<div className={styles.Pledges__cards}>
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
			<div className={styles.Pledges__body}>
				<h3 className={styles.Pledges__body__title}>All Pledges </h3>
				<div className={styles.Pledges__sortBySearch}>
					<SortBy />
					<div className={styles.Pledges__search}>
						<input
							type="search"
							name=""
							id=""
							placeholder="Search by email or keyword"
						/>
						<button>
							<RiSearch2Line />
						</button>
					</div>
				</div>
				<div className={styles.pledge}>
					<div className={styles.pledge__content}>
						{pledgeList.length === 0 ? (
							<EmptyState
								icon={<EmptyCampaignIcon />}
								message="No campaign created at this time!"
							/>
						) : (
							<div className={styles.pledgeCards}>
								{pledgeList.map((campaignItem, ind) => (
									<PledgeCard campaignData={campaignItem} key={ind} />
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pledges;

Pledges.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
