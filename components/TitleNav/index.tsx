import styles from "./TitleNav.module.scss";
import { BiChevronRight } from "react-icons/bi";
import { useRouter } from "next/router";
import BackButton from "../BackButton";
import Button from "../Button";
import { HiOutlineChevronLeft } from "react-icons/hi";

interface TitleNavProps {
	title: string;
	variant: "breadcrumb" | "back" | "button";
	backLink?: string;
	breadCrumbArray?: { label: string; link: string }[];
	buttonObj?: { label: string; action: () => void };
}

const TitleNav = ({
	title,
	variant,
	backLink,
	breadCrumbArray,
	buttonObj,
}: TitleNavProps) => {
	const router = useRouter();

	return (
		<div className={styles.TitleNav}>
			<div className={styles.TitleNav__title}>
				<HiOutlineChevronLeft
					size={18}
					onClick={() => router.push(backLink ?? "/")}
				/>
				<h3>{title}</h3>
			</div>

			<div className={styles.TitleNav__rightSide}>
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
				{variant === "back" && <BackButton link={backLink ?? "/"} />}
				{variant === "button" && buttonObj && (
					<Button onClick={buttonObj.action}>{buttonObj.label}</Button>
				)}
			</div>
		</div>
	);
};

export default TitleNav;
