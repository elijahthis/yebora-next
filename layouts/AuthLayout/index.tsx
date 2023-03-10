import Logo from "@/components/Logo";
import styles from "./AuthLayout.module.scss";

interface AuthLayoutProps {
	children: JSX.Element;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
	return (
		<main className={styles.AuthLayout}>
			<div className={styles.AuthLayout__topLogo}>
				<Logo />
			</div>
			<div className={styles.AuthLayout__rest}>{children}</div>
		</main>
	);
};

export default AuthLayout;
