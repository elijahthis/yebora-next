import GreyCard from "../GreyCard";
import styles from "./AccountCard.module.scss";
import { BankIcon } from "@/components/svgs";
import { AiOutlineLink } from "react-icons/ai";

const AccountCard = () => {
	return (
		<GreyCard title="Account Details">
			<div className={styles.accountDets}>
				<BankIcon />
				<div>
					<p>LAPTOP FUNDS LTD</p>
					<p>FIRSTBANK OF NIGERIA PLC </p>
					<p>
						3094827647
						<AiOutlineLink color="#328BE0" size={18} />
					</p>
				</div>
			</div>
		</GreyCard>
	);
};

export default AccountCard;
