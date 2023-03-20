import { ReactNode, useState } from "react";
import styles from "./MiniSidebar.module.scss";
import { BiChevronRight } from "react-icons/bi";

interface MiniSidebarProps {
	sideList: { label: string; component: ReactNode }[];
}

const MiniSidebar = ({ sideList }: MiniSidebarProps) => {
	const [active, setActive] = useState(0);

	return (
		<section className={styles.MiniSidebar}>
			<div className={styles.MiniSidebar__side}>
				{sideList.map((sideItem, ind) => (
					<div
						className={`${styles.MiniSidebar__side__item}
							${active === ind ? styles["MiniSidebar__side__item--active"] : ""}
						`}
						key={ind}
						onClick={() => setActive(ind)}
					>
						{sideItem.label}
						<BiChevronRight size={18} />
					</div>
				))}
			</div>
			<div>{sideList[active].component}</div>
		</section>
	);
};

export default MiniSidebar;
