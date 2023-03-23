import { ReactNode } from "react";
import styles from "./WhiteCardSection.module.scss";

interface WhiteCardSectionProps {
	children: ReactNode;
}

const WhiteCardSection = ({ children }: WhiteCardSectionProps) => {
	return <div className={styles.WhiteCardSection}>{children}</div>;
};

export default WhiteCardSection;
