import { DocIcon } from "../svgs";
import { BiArrowToBottom } from "react-icons/bi";
import styles from "./CampaignDetailsComponents.module.scss";

const Document = () => {
	return (
		<section className={styles.Document}>
			<h4>Supporting Campaign Documents</h4>
			<div className={styles.Docs}>
				{Array(5)
					.fill(0)
					.map((item, ind) => (
						<div key={ind} className={styles.DocRow}>
							<DocIcon />
							<p>Transcripts.doc</p>
							<button>
								<BiArrowToBottom size={18} />
								Download
							</button>
						</div>
					))}
			</div>
		</section>
	);
};

export default Document;
