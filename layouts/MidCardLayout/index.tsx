import Header from "@/components/Header";
import TitleNav from "@/components/TitleNav";
import { ReactNode } from "react";
import styles from "./MidCardLayout.module.scss";

interface MidCardLayoutProps {
	children: ReactNode;
	titleNavProps: {
		title: string;
		variant: "breadcrumb" | "back";
		backLink?: string;
		breadCrumbArray?: { label: string; link: string }[];
	};
}

const MidCardLayout = ({ children, titleNavProps }: MidCardLayoutProps) => {
	return (
		<main className={styles.MidCardLayout}>
			<Header />
			<div className={styles.MidCardLayout__titleNav}>
				<TitleNav {...titleNavProps} />
			</div>
			<div className={styles.MidCardLayout__body}>
				<div className={styles.WhiteCard}>{children}</div>
			</div>
		</main>
	);
};

export default MidCardLayout;
