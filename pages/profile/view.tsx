import Button from "@/components/Button";
import MiniSidebar from "@/components/MiniSidebar";
import AccountSettings from "@/components/ProfileComponents/AccountSettings";
import Compliance from "@/components/ProfileComponents/Compliance";
import FAQ from "@/components/ProfileComponents/FAQ";
import ProfileDetails from "@/components/ProfileComponents/ProfileDetails";
import RewardPoints from "@/components/ProfileComponents/RewardPoints";
import { MessagesIcon } from "@/components/svgs";
import TitleNav from "@/components/TitleNav";
import UploadImage from "@/components/UploadImage";
import HomeLayout from "@/layouts/HomeLayout";
import { ReactNode } from "react";
import styles from "../styles/MyProfilePage.module.scss";

const MyProfilePage = () => {
	const sideList = [
		{ label: "Profile Details", component: <ProfileDetails /> },
		{ label: "Account Settings", component: <AccountSettings /> },
		{ label: "Compliance", component: <Compliance /> },
		{ label: "Reward Points", component: <RewardPoints /> },
		{ label: "FAQ", component: <FAQ /> },
	];

	return (
		<main className={styles.MyProfilePage}>
			<TitleNav variant="back" title="Profile" backLink="/" />
			<div className={styles.MyProfilePage__body}>
				<div className={styles.topCard}>
					<div className={styles.imgWrap}>
						<UploadImage
							url="/profileImg.jpeg"
							width={133}
							height={133}
							alt="profile"
						/>
					</div>
					<div>
						<p className={styles.name}>Jude Michael</p>
						<p className={styles.email}>judemichael@gmail.com</p>
						<div className={styles.personal_point}>
							<p>Personal</p>
							<p>
								Token points: <span>20</span>
							</p>
						</div>
					</div>
					<Button>
						<div className={styles.btnDiv}>
							<MessagesIcon />
							Chat Support
						</div>
					</Button>
				</div>
				<div className={styles.bottom}>
					<MiniSidebar sideList={sideList} />
				</div>
			</div>
		</main>
	);
};

export default MyProfilePage;

MyProfilePage.getLayout = function getLayout(page: ReactNode) {
	return <HomeLayout>{page}</HomeLayout>;
};
