import ProfileImage from "../ProfileImage";
import styles from "./ContributionRow.module.scss";

interface ContributionRowProps {
	data: {
		initials: string;
		email: string;
		amount: number;
		time: string;
	};
}

const ContributionRow = ({ data }: ContributionRowProps) => {
	return (
		<div className={styles.ContributionRow}>
			<ProfileImage
				width={30}
				height={30}
				url={`https://ui-avatars.com/api/?background=random&name=${data.initials}`}
				alt={data.initials}
			/>
			<div>
				<p className={styles.ContributionRow__email}>{data.email}</p>
				<p className={styles.ContributionRow__amount}>${data.amount}</p>
			</div>
			<p className={styles.ContributionRow__time}>{data.time}</p>
		</div>
	);
};

export default ContributionRow;
