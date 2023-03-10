import styles from "./DashCard.module.scss";

interface DashCardProps {
	icon: JSX.Element;
	value: number;
	label: string;
	money?: boolean;
}

const DashCard = ({ icon, value, label, money = false }: DashCardProps) => {
	return (
		<div className={styles.DashCard}>
			<div className={styles.DashCard__icon}>{icon}</div>
			<div>
				<p className={styles.DashCard__value}>
					{money ? "$" : ""}
					{money ? value.toFixed(2) : value}
				</p>
				<p className={styles.DashCard__label}>{label}</p>
			</div>
		</div>
	);
};

export default DashCard;
