import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
	val: number;
	height: number;
}

const ProgressBar = ({ val, height }: ProgressBarProps) => {
	return (
		<div className={styles.ProgressBar} style={{ height: `${height}px` }}>
			<div
				className={styles.ProgressBar__bar}
				style={{ width: `${val}%` }}
			></div>
		</div>
	);
};

export default ProgressBar;
