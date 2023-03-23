import { VscGlobe } from "react-icons/vsc";
import { HiOutlineCurrencyDollar, HiOutlineBell } from "react-icons/hi";
import { KeyIcon, SecurityIcon } from "../svgs";
import styles from "./ProfileComponents.module.scss";
import MUIToggle from "../MUIToggle";

const AccountSettings = () => {
	const dataList = [
		{
			icon: <VscGlobe />,
			label: "Set Language",
			right: <></>,
		},
		{
			icon: <HiOutlineCurrencyDollar />,
			label: "Set Currency",
			right: <></>,
		},
		{
			icon: <KeyIcon />,
			label: "Password",
			right: <span className={styles.blueLink}>Update Password</span>,
		},
		{
			icon: <SecurityIcon />,
			label: "Set Transaction Pin",
			right: <span className={styles.blueLink}>Set Pin</span>,
		},
		{
			icon: <HiOutlineBell />,
			label: "Notifications",
			desc: "Turn on/off push notifiations",
			right: <MUIToggle />,
		},
	];

	return (
		<div className={styles.AccountSettings}>
			{dataList.map((item) => (
				<div className={styles.AccountSettings__item}>
					<div className={styles.AccountSettings__item__left}>
						<div className={styles.icon}>{item.icon}</div>
						<div>
							<p className={styles.label}>{item.label}</p>
							{item.desc && <p className={styles.desc}>{item.desc}</p>}
						</div>
					</div>
					{item.right}
				</div>
			))}
		</div>
	);
};

export default AccountSettings;
