import ContributionRow from "../ContributionRow";
import GreyCard from "../GreyCard";
import styles from "./ContributionCard.module.scss";

const ContributionCard = () => {
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

	return (
		<GreyCard title="Contributions">
			<div className={styles.contributions}>
				{contributionList.map((contribItem, ind) => (
					<ContributionRow data={contribItem} key={ind} />
				))}
			</div>
		</GreyCard>
	);
};

export default ContributionCard;
