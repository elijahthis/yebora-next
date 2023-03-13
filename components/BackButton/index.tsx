import { useRouter } from "next/router";
import { BiChevronLeft } from "react-icons/bi";
import styles from "./BackButton.module.scss";

interface BackButtonProps {
	link: string;
}

const BackButton = ({ link }: BackButtonProps) => {
	const router = useRouter();

	return (
		<button onClick={() => router.push(link)} className={styles.BackButton}>
			<BiChevronLeft />
			<span>Back</span>
		</button>
	);
};

export default BackButton;
