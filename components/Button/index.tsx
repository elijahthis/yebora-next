import styles from "./Button.module.scss";
import { BiLoaderAlt } from "react-icons/bi";

interface ButtonProps {
	children: JSX.Element | string;
	onClick?: () => void;
	style?: any;
	loading?: boolean;
	disabled?: boolean;
	type?: "button" | "submit" | "reset" | undefined;
	variant?: "primary" | "fullWidth" | "outline";
}

const Button = ({
	children,
	onClick = () => {},
	style,
	loading = false,
	disabled = false,
	type = "button",
	variant = "primary",
}: ButtonProps) => {
	return (
		<button
			data-test-id="button"
			className={`${styles.Button} ${styles[`Button--${variant}`]}`}
			onClick={(e) => {
				if (disabled) e.preventDefault();
				else if (!disabled && !loading) onClick();
			}}
			style={style}
			type={type}
			disabled={disabled}
		>
			{loading ? <BiLoaderAlt className="btn-loader" /> : children}
		</button>
	);
};

export default Button;
