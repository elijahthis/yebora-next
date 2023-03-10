import { Dispatch, SetStateAction } from "react";
import styles from "./RoundTabs.module.scss";

interface RoundTabsProps {
	tabList: string[];
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
}

const RoundTabs = ({
	tabList,
	currentPage,
	setCurrentPage,
}: RoundTabsProps) => {
	return (
		<div className={styles.RoundTabs}>
			{tabList.map((tabItem, ind) => (
				<p
					key={ind}
					className={`${styles.RoundTabs__tab} ${
						ind === currentPage && styles["RoundTabs__tab--active"]
					}`}
					onClick={() => setCurrentPage(ind)}
				>
					{tabItem}
				</p>
			))}
		</div>
	);
};

export default RoundTabs;
