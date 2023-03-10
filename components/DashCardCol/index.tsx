import styles from "./DashCardCol.module.scss";

interface DashCardColProps {
	icon: JSX.Element;
	value: number;
	label: string;
	money?: boolean;
	bg: string;
}

const DashCardCol = ({
	icon,
	value,
	label,
	money = false,
	bg,
}: DashCardColProps) => {
	return (
		<div className={styles.DashCardCol} style={{ backgroundImage: bg }}>
			<div className={styles.DashCardCol__icon}>{icon}</div>
			<div>
				<p className={styles.DashCardCol__label}>{label}</p>
				<p className={styles.DashCardCol__value}>
					{money ? "$" : ""}
					{money ? value.toFixed(2) : value}
				</p>
			</div>
		</div>
	);
};

export default DashCardCol;
