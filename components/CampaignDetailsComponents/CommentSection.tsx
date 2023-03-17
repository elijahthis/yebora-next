import CommentCard from "../CommentCard";
import styles from "./CampaignDetailsComponents.module.scss";

const CommentSection = () => {
	const commentList: {
		user: { img: string; name: string };
		comment: string;
		time: string;
	}[] = [
		{
			user: { name: "Mariam Ugochukwu", img: "" },
			comment:
				"I can’t wait to see this children get what excites them, it sounds like a lot of fun!",
			time: "2h",
		},
		{
			user: { name: "Bishop Phil", img: "" },
			comment:
				"HELLO After reviewing your campaign, I can see that you haven’t yet achieved your objectives because there isn’t enough organic content in it. I’m here to assist you raise awareness for your cause, and I can guarantee that a trillion people will contribute. You can contact me at https://www.fiverr.com/meemtaz?up rollout=true to avoid stressing yourself out.",
			time: "5h",
		},
		{
			user: { name: "Freya Mark", img: "" },
			comment:
				"Trust is probably the biggest issue when it comes to crowdfunding: When you are a brand with no prior record, you have to consider how you can generate enough brand credibility with investors. Without trust you might not generate enough interest in your campaign and fail to meet your targets. Solution is here, visit official website for further details: www.fiverr.com/freya_crowd",
			time: "8h",
		},
		{
			user: { name: "James N. ", img: "" },
			comment:
				"Read this interesting article about promoting campaigns. Copy and paste this link: https://medium.com/@dannysunny1/some-tips-to-optimize-your-campaign-and-reduce-some-risks-beb562098a",
			time: "12h",
		},
	];

	return (
		<section className={styles.CommentSection}>
			{commentList.map((commentItem) => (
				<CommentCard commentData={commentItem} />
			))}
		</section>
	);
};

export default CommentSection;
