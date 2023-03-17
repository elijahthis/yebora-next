import ProfileImage from "../ProfileImage";
import styles from "./CommentCard.module.scss";

interface CommentCardProps {
	commentData: {
		user: { img: string; name: string };
		comment: string;
		time: string;
	};
}

const CommentCard = ({ commentData }: CommentCardProps) => {
	return (
		<div className={styles.CommentCard}>
			<ProfileImage
				url={
					commentData.user.img ||
					`https://ui-avatars.com/api/?background=random&name=${commentData.user.name}`
				}
				width={48}
				height={48}
				alt="user"
			/>
			<div>
				<p className={styles.CommentCard__userName}>{commentData.user.name}</p>
				<p className={styles.CommentCard__comment}>{commentData.comment}</p>
			</div>
			<p className={styles.CommentCard__time}>{commentData.time}</p>
		</div>
	);
};

export default CommentCard;
