import styles from "./TitleNav.module.scss";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/router";

interface TitleNavProps {
	title: string;
	variant: "breadcrumb" | "back";
	backLink?: string;
	breadCrumbArray?: { label: string; link: string }[];
}

const TitleNav = ({
	title,
	variant,
	backLink,
	breadCrumbArray,
}: TitleNavProps) => {
	const router = useRouter();

	return (
		<div className={styles.TitleNav}>
			<h3>{title}</h3>
			{variant === "breadcrumb" && breadCrumbArray && (
				<div className={styles.TitleNav__breadCrumb}>
					{breadCrumbArray.map((crumbItem, ind) => (
						<>
							<p
								className={`${styles.crumbItem} ${
									ind === breadCrumbArray.length - 1 &&
									styles["crumbItem--current"]
								}`}
								onClick={() => {
									if (ind < breadCrumbArray.length - 1) {
										router.push(crumbItem.link);
									}
								}}
							>
								{crumbItem.label}
							</p>
							{ind < breadCrumbArray.length - 1 && <BiChevronRight />}
						</>
					))}
				</div>
			)}
		</div>
	);
};

export default TitleNav;
