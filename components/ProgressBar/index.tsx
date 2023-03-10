import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
	val: number;
}

const ProgressBar = ({ val }: ProgressBarProps) => {
	return (
		<div className={styles.ProgressBar}>
			<div
				className={styles.ProgressBar__bar}
				style={{ width: `${val}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;
