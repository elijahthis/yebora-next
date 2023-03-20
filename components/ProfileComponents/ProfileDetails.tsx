import { MailIcon, ProfileIcon, UserPin } from "../svgs";
import styles from "./ProfileComponents.module.scss";
import { IoCallOutline } from "react-icons/io5";

const ProfileDetails = () => {
	const dataList = [
		{ label: "Full Name", value: "Jennifer Wilson", icon: <ProfileIcon /> },
		{
			label: "Phone Number",
			value: "09087445362",
			icon: <IoCallOutline />,
		},
		{
			label: "Email Address",
			value: "jenny.wilson@gmail.com",
			icon: <MailIcon />,
		},
		{ label: "Account Type", value: "Personal account", icon: <UserPin /> },
	];

	return (
		<div className={styles.ProfileDetails}>
			<div className={styles.ProfileDetails__top}>
				<p>Personal Information</p>
				<span className={styles.edit}>Edit Profile</span>
			</div>
			<div className={styles.ProfileDetails__list}>
				{dataList.map((item, ind) => (
					<div key={ind} className={styles.ProfileDetails__list__item}>
						<div className={styles.icon}>{item.icon}</div>
						<div>
							<p className={styles.value}>{item.value}</p>
							<p className={styles.label}>{item.label}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProfileDetails;
