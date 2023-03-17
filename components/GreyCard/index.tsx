import { ReactNode } from "react";
import styles from "./GreyCard.module.scss";

interface GreyCardProps {
	title: string;
	children: ReactNode;
}

const GreyCard = ({ title, children }: GreyCardProps) => {
	return (
		<div className={styles.GreyCard}>
			<p className={styles.GreyCard__title}>{title}</p>
			<div className={styles.GreyCard__body}>{children}</div>
		</div>
	);
};

export default GreyCard;
