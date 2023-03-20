import { WalletIcon } from "../svgs";
import styles from "./CampaignDetailsComponents.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";

const NoticeBoard = () => {
	const noticeBoardList = [
		{
			title: "New Payment",
			desc: "Manuel Chucho has successfully made a donation of $200,000 to the crowdfunding campaign.",
			time: "2021-03-10 20:19:15",
		},
		{
			title: "Withdrawal Successful",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti morbi in amet sit donec congue tellus. Tincidunt pharetra urna aliquet eu, pellentesque maecenas. Tortor risus nunc",
			time: "2021-03-10 20:19:15",
		},
		{
			title: "Token Withdrawal",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti morbi in amet sit donec congue tellus. Tincidunt pharetra urna aliquet eu, pellentesque maecenas. Tortor risus nunc",
			time: "2021-03-10 20:19:15",
		},
		{
			title: "Withdrawal Successful",
			desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti morbi in amet sit donec congue tellus. Tincidunt pharetra urna aliquet eu, pellentesque maecenas. Tortor risus nunc",
			time: "2021-03-10 20:19:15",
		},
	];

	return (
		<div className={styles.NoticeBoard}>
			{noticeBoardList.map((noticeItem) => (
				<div className={styles.noticeItem}>
					<div className={styles.noticeItem__icon}>
						<WalletIcon />
					</div>
					<div>
						<div className={styles.noticeItem__top}>
							<p className={styles.title}>{noticeItem.title}</p>
							<p className={styles.time}>{noticeItem.time}</p>
						</div>
						<p className={styles.desc}>{noticeItem.desc}</p>
					</div>
					<BsThreeDotsVertical style={{ cursor: "pointer" }} />
				</div>
			))}
		</div>
	);
};

export default NoticeBoard;
