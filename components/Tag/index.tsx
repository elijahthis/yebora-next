import styles from "./Tag.module.scss";

interface TagProps {
	type: "Celebration" | "Crowdfunding" | "Community";
}

const Tag = ({ type }: TagProps) => {
	return (
		<p
			className={styles.Tag}
			style={{
				color:
					type === "Celebration"
						? "#B54708"
						: type === "Crowdfunding"
						? "#175CD3"
						: "#027A48",
				backgroundColor:
					type === "Celebration"
						? "#FFFAEB"
						: type === "Crowdfunding"
						? "#EFF8FF"
						: "#ECFDF3",
			}}
		>
			{type}
		</p>
	);
};

export default Tag;
