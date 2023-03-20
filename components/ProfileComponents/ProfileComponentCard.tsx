import { ReactNode } from "react";
import styles from "./ProfileComponents.module.scss";

interface ProfileComponentCardProps {
	title: string;
	children: ReactNode;
}

const ProfileComponentCard = ({
	title,
	children,
}: ProfileComponentCardProps) => {
	return (
		<div className={styles.ProfileComponentCard}>
			<div className={styles.ProfileComponentCard__title}>{title}</div>
			<div className={styles.ProfileComponentCard__body}>{children}</div>
		</div>
	);
};

export default ProfileComponentCard;
