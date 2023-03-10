import styles from "./SocialButton.module.scss";

interface SocialButtonProps {
	children: JSX.Element[];
	bg: string;
	col: string;
	border: string;
}

const SocialButton = ({ children, bg, col, border }: SocialButtonProps) => {
	return (
		<div
			className={styles.SocialButton}
			style={{ border: `0.5px solid ${border}`, background: bg, color: col }}
		>
			{children}
		</div>
	);
};

export default SocialButton;
