import { RiStickyNoteLine } from "react-icons/ri";
import styles from "./EmptyState.module.scss";

interface EmptyStateProps {
	message?: string;
	icon?: JSX.Element;
}

const EmptyState = ({
	message = "Nothing to see here",
	icon = <RiStickyNoteLine />,
}: EmptyStateProps) => {
	return (
		<div className={styles.EmptyState}>
			{icon}
			<p>{message}</p>
		</div>
	);
};

export default EmptyState;
