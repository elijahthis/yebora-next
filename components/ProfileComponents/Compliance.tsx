import Button from "../Button";
import { DocIcon } from "../svgs";
import { BiArrowToBottom } from "react-icons/bi";
import styles from "./ProfileComponents.module.scss";

const Compliance = () => {
	return (
		<div className={styles.Compliance}>
			<p className={styles.Compliance__title}>Uploaded Document</p>
			<div className={styles.Compliance__body}>
				<DocIcon />
				<p>My-iddrive-complete.doc</p>
				<Button variant="blueFill">
					<BiArrowToBottom size={18} />
					Download
				</Button>
			</div>
		</div>
	);
};

export default Compliance;
