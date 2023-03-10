import styles from "./Banner.module.scss";
import { RiSearch2Line } from "react-icons/ri";

const Banner = () => {
	return (
		<div className={styles.Banner}>
			<p className={styles.Banner__tag}>Empower Change with Every Donation</p>
			<h2>
				Small Donations, Big Impact: Contribute to Help Fund a Better Future!
			</h2>
			<div className={styles.Banner__searchBar}>
				<input
					type="search"
					name=""
					id=""
					placeholder="Search popular campaigns"
				/>
				<button>
					<RiSearch2Line />
				</button>
			</div>
		</div>
	);
};

export default Banner;
