import Header from "@/components/Header";
import { ReactNode } from "react";
import styles from "./HomeLayout.module.scss";

interface HomeLayoutProps {
	children: ReactNode;
}

const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<main className={styles.HomeLayout}>
			<Header />
			<div className={styles.HomeLayout__body}>{children}</div>
		</main>
	);
};

export default HomeLayout;
