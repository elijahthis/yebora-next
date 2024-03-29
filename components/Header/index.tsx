import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../Logo";
import { BellIcon, CampaignIcon, OverviewIcon, PledgesIcon } from "../svgs";
import styles from "./Header.module.scss";
import ProfileImage from "../ProfileImage";
import { TbChevronDown } from "react-icons/tb";

const Header = () => {
	const router = useRouter();

	console.log("router", router);

	const headerLinks = [
		{ title: "Overview", link: "/", icon: <OverviewIcon /> },
		{ title: "All Campaigns", link: "/campaigns", icon: <CampaignIcon /> },
		{ title: "Pledges", link: "/pledges", icon: <PledgesIcon /> },
	];

	return (
		<>
			<header className={styles.Header}>
				<Logo />
				<div className={styles.Header__right}>
					<ul className={styles.headerLinks}>
						{headerLinks.map((linkItem, ind) => (
							<Link
								href={linkItem.link}
								className={`${styles.linkItem} ${
									router.pathname === linkItem.link
										? styles["linkItem--active"]
										: ""
								}`}
								key={ind}
							>
								<li>{linkItem.title}</li>
							</Link>
						))}
					</ul>
					<div className={styles.Header__right__side}>
						<BellIcon />
						<div className={styles.line}></div>
						<div
							className={styles.profileBit}
							onClick={() => router.push("/profile/view")}
						>
							<ProfileImage
								url="/profileImg.jpeg"
								alt="profile"
								width={32}
								height={32}
								style={{ margin: "auto 0" }}
							/>
							<p>Philip</p>
							<TbChevronDown size={16} />
						</div>
					</div>
				</div>
			</header>
			<div className={styles.bottomHeader}>
				{headerLinks.map((linkItem, ind) => (
					<Link
						href={linkItem.link}
						className={`${styles.linkItem} ${
							router.pathname === linkItem.link
								? styles["linkItem--active"]
								: ""
						}`}
						key={ind}
					>
						{linkItem.icon}
						<p>{linkItem.title}</p>
					</Link>
				))}
			</div>
		</>
	);
};

export default Header;
